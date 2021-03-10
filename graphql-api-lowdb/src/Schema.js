import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
const typeDefs = `
 type Query {
     hello: String
     greet(name: String!): String
     tasks: [Task]
     aboutme: [AboutMe]
 }

 type AboutMe {
   _id:ID
   description: String!
   language:String!
 }

 type Task {
    _id: ID
    title: String!
    description: String!
    number: Int
 }

 type Mutation {
    createTask(input: TaskInput): Task
    createAboutMe(input: AboutmeInput): AboutMe
 }

 input AboutmeInput {
   description: String!
  language:String!
 }

 input TaskInput {
   title: String!
   description: String!
   number: Int
 }
`;

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
