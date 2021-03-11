import { default as lowDb } from "lowdb";
import { default as FileSync } from "lowdb/adapters/FileSync";
import { Schema } from "./interfaces";

export class DbService {
  private db!: lowDb.LowdbSync<Schema>;
  constructor() {
    this.initDatabase();
  }
  private initDatabase() {
    const adapter = new FileSync<Schema>("db.json");
    this.db = lowDb(adapter);
    this.db.defaults({ aboutme: [], projects: [], routes: [] }).write();
  }
  public getConnection(): lowDb.LowdbSync<Schema> {
    return this.db;
  }
}
