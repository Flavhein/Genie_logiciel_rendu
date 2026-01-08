import { randomUUID } from "node:crypto";

export class Event {
  constructor(accountId, payload, name, creationDate) {
    this.accountId = accountId ?? randomUUID();
    this.payload = payload;
    this.name = name;
    this.creationDate = creationDate ?? new Date();
  }
}
