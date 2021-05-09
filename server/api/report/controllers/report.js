'use strict';

const { default: createStrapi } = require("strapi");
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    /**
     * Adds a user to the report when the report is created
     * @param {*} ctx   Context information
     * @returns         Returns the created report
     */
    async create(ctx) {
        let entity;

        // Check if the context has multiple parts and create the report
        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            data.user = ctx.state.user.id;
            entity = await createStrapi.services.report.create(data, { files });
        } else {
            ctx.request.body.user = ctx.state.user.id;
            entity = await strapi.services.report.create(ctx.request.body);
        }

        return sanitizeEntity(entity, { model: strapi.models.report });
    },

    /**
     * Restricts permissions for the report so that only the owning user can modify it
     * @param {*} ctx   Context information
     * @returns         Returns the modified report
     */
    async update(ctx) {
        const { id } = ctx.params;

        let entity;
        let report;

        // Find the report
        // If the user is the author of the report or the supervisor of the user who submitted the report, allow access
        if (ctx.state.user.role.name == 'Supervisor') {
            // Find the specified report for supervisor
            [ report ] = await strapi.services.report.find({
                id: ctx.params.id,
                'user.group': ctx.state.user.group,
            });
        } else {
            // Find the specified report for author
            [ report ] = await strapi.services.report.find({
                id: ctx.params.id,
                'user.id': ctx.state.user.id,
            });
        }

        // Error Message for unauthorized users
        if (!report) {
            return ctx.unauthorized('You cannot update this entry');
        }

        // Check for multiple parts and update the report
        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.report.update({ id }, data, { files, });
        } else {
            entity = await strapi.services.report.update({ id }, ctx.request.body);
        }

        return sanitizeEntity(entity, { model: strapi.models.report });
    },

    /**
     * This finds only the reports that the current user has permission to view.
     * For supervisors, they can view the all of the reports from their group.
     * For regular users, they are only able to view their own reports.
     * @param {*} ctx   Context information
     * @returns         Returns all of the reports the user has access to
     */
    async find(ctx) {
        let entities;

        // Check if the current user is a supervisor
        // If the user is a supervisor, then find all reports for the supervised group
        // Otherwise, only display the user's own reports
        if (ctx.state.user.role.name == 'Supervisor') {
            ctx.query = { 'user.group': ctx.state.user.group };
        } else {
            ctx.query = { 'user.id': ctx.state.user.id };
        }

        // Find the user's accessible reports
        if (ctx.query._q) {
            entities = await strapi.services.report.search(ctx.query);
        } else {
            entities = await strapi.services.report.find(ctx.query);
        }

        return entities.map(entity => sanitizeEntity(entity, {
            model: strapi.models.report
        }));
    },

    /**
     * This finds a specific report to view. Only the owner is able to view it.
     * @param {*} ctx   Context information
     * @returns         Returns an error message or returns the specified report
     */
    async findOne(ctx) {
        const { id } = ctx.params;

        // Check if the report exists
        let report = await strapi.services.report.findOne({ id });

        // If the report does not exist, return 404 error
        if (!report) {
            ctx.status = 404;
            return {
                status: '404',
                message: 'Report does not exist',
            }
        }

        // Find the report
        // If the user is the author of the report or the supervisor of the user who submitted the report, allow access
        if (ctx.state.user.role.name == 'Supervisor') {
            // Find the specified report for supervisor
            [ report ] = await strapi.services.report.find({
                id: ctx.params.id,
                'user.group': ctx.state.user.group,
            });
        } else {
            // Find the specified report for author
            [ report ] = await strapi.services.report.find({
                id: ctx.params.id,
                'user.id': ctx.state.user.id,
            });
        }

        // Error message for unauthorized users
        if (!report) {
            return ctx.unauthorized('You are not authorized to view this entry');
        }

        const entity = await strapi.services.report.findOne({ id });
        return sanitizeEntity(entity, {model: strapi.models.report });
    }
};
