# Americorps
Code for Americorps EPICS Projects




## Backend:
Database is set up with PostgreSQL and Strapi.io  
Backend permissions are not fully set up, most collection types lack access restrictions.  

Users with the role "Authenticated" are the regular members. These members should have very little access, only being able to access their own content.  
Users with the role "Supervisor" are site supervisors. These supervisors are able to view user content from users who work at the supervised site. For example, the supervisor at Site A will be able to view user content from all users working at Site A.  

The report collection type has some permissions set up and can be used as a reference for setting up some permissions for other collection types.  
Users are only able to view their own reports. Supervisors are able to view reports from users in their group, which represents the users working at the site. Attempting to access a report outside of their group will result in an error.  

These can be tested in Postman using queries after running the backend program. Make sure to create a workspace in Postman to make queries.  

**************************************************************************************************
NOTE: POSTGRESQL MUST BE INSTALLED ON YOUR MACHINE AND SET UP. WE SET UP POSTGRESQL WITH:
host: 127.0.0.1

port: 5432  
database: americorps  
username: db_postgres  
password: admin  
ssl: false  
**************************************************************************************************

In order to run the program, type "npm run develop" into the command line within the "server" folder.  
The program should be running on http://localhost:1337/.  
Once the program is running, make a POST request to http://localhost:1337/auth/local. If the program has been hosted on a site (such as Heroku), then use that link instead with /auth/local added to the end. Within the body of this request, make sure the type is set to "raw" and "JSON".  

To login as a user, the text in the body should look like:  
{  
  "identifier": "[email]",  
  "password": "[account_password]"  
}  
where:  
  [email] is the user account's email  
  [account_password] is the user account's password  

MAKE SURE THE REQUEST IS POST http://localhost:1337/auth/local. If program is hosted, use POST [insert link here].  

This will return a JSON with user information. This JSON should have a "jwt" at the top. The string to the right of the "jwt": is the authentication token. When making requests with a user account, the authentication token must be used in the "Header" section.  

Header section should look like:
  |KEY              |   VALUE                       |  DESCRIPTION      |
  | --------------  | ----------------------------- | ----------------- |
  |AUTHENTICATION   |   Bearer [insert jwt token]   |  [leave blank]    |
  
  The jwt token from authentication will replace [insert jwt token]. Description can be left blank.

**************************************************************************************************

To access reports:
Make sure the Header section looks like the above section.  
To get the reports, make a GET request with "/reports" added to the end of the link.  
For the default link, the request is GET http://localhost:1337/reports.  
This will return a list of JSONS with all accessible reports for the user.  
For a regular member, this will show only the member's reports.  
For a supervisor, this will show all group members' reports.  

For example, if there are 3 reports:
  | Report    | User    | Group   |
  | --------  | ------  | ------- |
  | Report1   | User1   | Group A |
  | Report2   | User2   | Group A |
  | Report3   | User3   | Group B |

Then the supervisor of Group A can view reports from user1 and user2, but not reports from user3.  
Likewise, the supervisor of Group B can view reports from user3, but not reports from user1 and user2.

## Firebase

- Type 'npm install firebase'
