require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./scheme";
const PORT = process.env.PORT;
const server = new ApolloServer({
  schema,
});
server
  .listen(PORT)
  .then(() =>
    console.log(`Server is running on port ---> http://localhost:${PORT}`)
  );
