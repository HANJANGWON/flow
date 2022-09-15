import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    deleteExtension: async (_, { id }, { prisma }) => {
      const extention = await prisma.limitedExtension.findUnique({
        where: {
          id,
        },
      });

      if (!extention) {
        return {
          ok: false,
          error: "Extension not found",
        };
      } else {
        await prisma.limitedExtension.delete({
          where: {
            id,
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
