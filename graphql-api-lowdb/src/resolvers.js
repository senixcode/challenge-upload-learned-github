import { tasks } from "./example";
import { getConnection } from "./lowdb";
import { v4 as uuidv4 } from "uuid";
export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world with graphql";
    },
    greet(root, args) {
      return `hello ${args.name}`;
    },
    tasks() {
      return tasks;
    },
    aboutme() {
      const aboutme = getConnection().get("aboutme").value();
      return aboutme;
    },
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    createAboutMe(_, { input }) {
      input._id = uuidv4();
      getConnection().get("aboutme").push(input).write();
      return input;
    },
  },
};
