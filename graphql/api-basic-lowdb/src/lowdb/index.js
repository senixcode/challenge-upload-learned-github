import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
let db;
export function createConnection() {
  const adapter = new FileSync("db.json");
  db = low(adapter);
  db.defaults({ aboutme: [], projects: [], routes: [] }).write();
}

export const getConnection = () => db;

