import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    toggleExtension: async (_, { id }, { prisma }) => {
      const extension = await prisma.limitedExtension.findUnique({
        where: {
          id,
        },
        select: {
          isActivated: true,
        },
      });
      if (extension?.isActivated) {
        await prisma.limitedExtension.update({
          where: {
            id,
          },
          data: {
            isActivated: false,
          },
        });
        return {
          ok: true,
        };
      } else {
        await prisma.limitedExtension.update({
          where: {
            id,
          },
          data: {
            isActivated: true,
          },
        });
        return {
          ok: true,
        };
      }
    },
  },
};

export default resolvers;
