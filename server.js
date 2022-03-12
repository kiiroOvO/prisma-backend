import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "444",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(() => console.log("running on port:4000"));
