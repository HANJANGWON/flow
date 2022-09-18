import { Resolvers } from "../types";

const resolvers: Resolvers = {
  LimitedExtension: {
    customExtensionsNumber: (_, __, { prisma }) =>
      prisma.limitedExtension.count({
        where: {
          isCustom: true,
        },
      }),
  },
};

export default resolvers;
