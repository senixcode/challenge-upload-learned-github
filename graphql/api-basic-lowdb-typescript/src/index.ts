import "reflect-metadata";
import {startServer} from './app'
import { DbService } from "./lowdb";
async function main() {
  new DbService();
  const app = await startServer()
  app.listen(3000)
  console.log("server on port", 3000);
}
main()

