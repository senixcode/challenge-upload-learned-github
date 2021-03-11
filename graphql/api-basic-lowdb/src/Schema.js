import { gql } from "apollo-server";
export const typeDefs = gql`
  type AboutMe {
    _id: ID
    description: String!
    language: String!
  }

  type Query {
    getAboutMe: [AboutMe]
  }

  type Mutation {
    createAboutMe(input: AboutmeCreateInput!): AboutMe
    updateAboutMe(_id: ID!, input: AboutmeUpdateInput!): AboutMe
    deleteAboutMe(_id: ID!): AboutMe
  }

  input AboutmeCreateInput {
    description: String!
    language: String!
  }

  input AboutmeUpdateInput {
    description: String
    language: String
  }
`;
