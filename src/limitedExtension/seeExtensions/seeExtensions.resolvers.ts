import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    seeExtensions: (_, __, { prisma }) => prisma.limitedExtension.findMany(),
  },
};

export default resolvers;
