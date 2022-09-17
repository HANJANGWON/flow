require("dotenv").config();
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import schema from "./schema";
import prisma from "./client";

const PORT = process.env.PORT;

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: async () => {
    return {
      prisma,
    };
  },
});

server
  .listen(PORT)
  .then(() => console.log(`Server is running http:localhost.${PORT}/`));
