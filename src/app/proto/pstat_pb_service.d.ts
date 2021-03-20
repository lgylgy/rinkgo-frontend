// package: pstat
// file: pstat.proto

import * as pstat_pb from "./pstat_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PStatServiceGetHistory = {
  readonly methodName: string;
  readonly service: typeof PStatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pstat_pb.Request;
  readonly responseType: typeof pstat_pb.History;
};

export class PStatService {
  static readonly serviceName: string;
  static readonly GetHistory: PStatServiceGetHistory;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class PStatServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getHistory(
    requestMessage: pstat_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pstat_pb.History|null) => void
  ): UnaryResponse;
  getHistory(
    requestMessage: pstat_pb.Request,
    callback: (error: ServiceError|null, responseMessage: pstat_pb.History|null) => void
  ): UnaryResponse;
}

