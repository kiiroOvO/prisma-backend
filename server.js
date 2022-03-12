import { ApolloServer } from "apollo-server";
import client from "./client";
import schema from "./scheme";

const server = new ApolloServer({
  schema,
});

server
  .listen()
  .then(() => console.log("running on port ---> http://localhost:4000"));
