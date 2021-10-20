/// <reference types="node" />
import { ConnectivityState } from "./connectivity-state";
import { ChannelTrace } from "./generated/grpc/channelz/v1/ChannelTrace";
import { SubchannelAddress } from "./subchannel-address";
import { ChannelzDefinition, ChannelzHandlers } from "./generated/grpc/channelz/v1/Channelz";
export declare type TraceSeverity = 'CT_UNKNOWN' | 'CT_INFO' | 'CT_WARNING' | 'CT_ERROR';
export interface ChannelRef {
    kind: 'channel';
    id: number;
    name: string;
}
export interface SubchannelRef {
    kind: 'subchannel';
    id: number;
    name: string;
}
export interface ServerRef {
    kind: 'server';
    id: number;
}
export interface SocketRef {
    kind: 'socket';
    id: number;
    name: string;
}
interface TraceEvent {
    description: string;
    severity: TraceSeverity;
    timestamp: Date;
    childChannel?: ChannelRef;
    childSubchannel?: SubchannelRef;
}
export declare class ChannelzTrace {
    events: TraceEvent[];
    creationTimestamp: Date;
    eventsLogged: number;
    constructor();
    addTrace(severity: TraceSeverity, description: string, child?: ChannelRef | SubchannelRef): void;
    getTraceMessage(): ChannelTrace;
}
export declare class ChannelzChildrenTracker {
    private channelChildren;
    private subchannelChildren;
    private socketChildren;
    refChild(child: ChannelRef | SubchannelRef | SocketRef): void;
    unrefChild(child: ChannelRef | SubchannelRef | SocketRef): void;
    getChildLists(): ChannelzChildren;
}
export declare class ChannelzCallTracker {
    callsStarted: number;
    callsSucceeded: number;
    callsFailed: number;
    lastCallStartedTimestamp: Date | null;
    addCallStarted(): void;
    addCallSucceeded(): void;
    addCallFailed(): void;
}
export interface ChannelzChildren {
    channels: ChannelRef[];
    subchannels: SubchannelRef[];
    sockets: SocketRef[];
}
export interface ChannelInfo {
    target: string;
    state: ConnectivityState;
    trace: ChannelzTrace;
    callTracker: ChannelzCallTracker;
    children: ChannelzChildren;
}
export interface SubchannelInfo extends ChannelInfo {
}
export interface ServerInfo {
    trace: ChannelzTrace;
    callTracker: ChannelzCallTracker;
    listenerChildren: ChannelzChildren;
    sessionChildren: ChannelzChildren;
}
export interface TlsInfo {
    cipherSuiteStandardName: string | null;
    cipherSuiteOtherName: string | null;
    localCertificate: Buffer | null;
    remoteCertificate: Buffer | null;
}
export interface SocketInfo {
    localAddress: SubchannelAddress;
    remoteAddress: SubchannelAddress | null;
    security: TlsInfo | null;
    remoteName: string | null;
    streamsStarted: number;
    streamsSucceeded: number;
    streamsFailed: number;
    messagesSent: number;
    messagesReceived: number;
    keepAlivesSent: number;
    lastLocalStreamCreatedTimestamp: Date | null;
    lastRemoteStreamCreatedTimestamp: Date | null;
    lastMessageSentTimestamp: Date | null;
    lastMessageReceivedTimestamp: Date | null;
    localFlowControlWindow: number | null;
    remoteFlowControlWindow: number | null;
}
export declare function registerChannelzChannel(name: string, getInfo: () => ChannelInfo): ChannelRef;
export declare function registerChannelzSubchannel(name: string, getInfo: () => SubchannelInfo): SubchannelRef;
export declare function registerChannelzServer(getInfo: () => ServerInfo): ServerRef;
export declare function registerChannelzSocket(name: string, getInfo: () => SocketInfo): SocketRef;
export declare function unregisterChannelzRef(ref: ChannelRef | SubchannelRef | ServerRef | SocketRef): void;
export interface ChannelzClientView {
    updateState(connectivityState: ConnectivityState): void;
    addTrace(severity: TraceSeverity, description: string, child?: ChannelRef | SubchannelRef): void;
    addCallStarted(): void;
    addCallSucceeded(): void;
    addCallFailed(): void;
    addChild(child: ChannelRef | SubchannelRef): void;
    removeChild(child: ChannelRef | SubchannelRef): void;
}
export interface ChannelzSubchannelView extends ChannelzClientView {
    getRef(): SubchannelRef;
}
export declare function getChannelzHandlers(): ChannelzHandlers;
export declare function getChannelzServiceDefinition(): ChannelzDefinition;
export declare function setup(): void;
export {};