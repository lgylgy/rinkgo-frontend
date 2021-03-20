// package: pstat
// file: pstat.proto

import * as jspb from "google-protobuf";

export class Request extends jspb.Message {
  getPlayerid(): number;
  setPlayerid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    playerid: number,
  }
}

export class History extends jspb.Message {
  getPlayerid(): number;
  setPlayerid(value: number): void;

  getName(): string;
  setName(value: string): void;

  clearEntriesList(): void;
  getEntriesList(): Array<Entry>;
  setEntriesList(value: Array<Entry>): void;
  addEntries(value?: Entry, index?: number): Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): History.AsObject;
  static toObject(includeInstance: boolean, msg: History): History.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: History, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): History;
  static deserializeBinaryFromReader(message: History, reader: jspb.BinaryReader): History;
}

export namespace History {
  export type AsObject = {
    playerid: number,
    name: string,
    entriesList: Array<Entry.AsObject>,
  }
}

export class Entry extends jspb.Message {
  getSeason(): string;
  setSeason(value: string): void;

  getTeam(): string;
  setTeam(value: string): void;

  getEvent(): string;
  setEvent(value: string): void;

  getMatchs(): number;
  setMatchs(value: number): void;

  getGoals(): number;
  setGoals(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entry.AsObject;
  static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entry;
  static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
}

export namespace Entry {
  export type AsObject = {
    season: string,
    team: string,
    event: string,
    matchs: number,
    goals: number,
  }
}

