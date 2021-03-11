import { typeDefs } from "./Schema";
import { resolvers } from "./resolvers";
import { createConnection } from "./lowdb";
import { ApolloServer } from "apollo-server";
createConnection();

const server = new ApolloServer({typeDefs, resolvers})
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
