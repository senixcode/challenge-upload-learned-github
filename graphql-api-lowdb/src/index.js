import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import { createConnection } from "./lowdb";
createConnection();
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => console.log("server running"));
