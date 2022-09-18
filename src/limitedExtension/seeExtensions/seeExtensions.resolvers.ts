import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    seeExtensions: (_, __, { prisma }) =>
      prisma.limitedExtension.findMany({
        orderBy: {
          createdAt: "asc",
        },
      }),
  },
};

export default resolvers;
