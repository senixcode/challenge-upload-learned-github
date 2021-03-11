import { getConnection } from "./lowdb";
import { v4 as uuidv4 } from "uuid";
export const resolvers = {
  Query: {
    getAboutMe() {
      const aboutme = getConnection().get("aboutme").value();
      return aboutme;
    },
  },
  Mutation: {
    createAboutMe(_, { input }) {
      input._id = uuidv4();
      getConnection().get("aboutme").push(input).write();
      return input;
    },
    async updateAboutMe(_, { _id, input }) {
      const result = await getConnection()
        .get("aboutme")
        .find({ _id })
        .assign(input)
        .write();
      return result;
    },
    async deleteAboutMe(_, { _id }) {
      const result = await getConnection().get("aboutme").remove({ _id }).write();
      return result[0];
    },
  },
};
