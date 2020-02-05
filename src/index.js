const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();

const typeDefs = gql`
  type Query {
    hello: String!
  }
`
const resolvers = {
  Query: {
    hello: () => "Hello World!",
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4001 }, () => {
  console.log(`🚀 the server is blasting off to 4001!`);
})