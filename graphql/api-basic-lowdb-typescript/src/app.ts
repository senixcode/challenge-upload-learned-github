import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { PingResolver } from "./graphql/resolvers/ping";
import { buildSchema } from "type-graphql";
import { AboutMeResolver } from "./graphql/resolvers/aboutMeResolver";
export async function startServer(): Promise<express.Express> {
  const app: Express = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, AboutMeResolver],
      validate:false
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  server.applyMiddleware({ app, path: "/graphql" });
  return app;
}
