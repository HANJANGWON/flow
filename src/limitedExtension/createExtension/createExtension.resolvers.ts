import { Resolvers } from "../../types";
import { createExtensionInput } from "./createExtention.dto";

const resolvers: Resolvers = {
  Mutation: {
    createExtension: async (
      _,
      { title, isCustom }: createExtensionInput,
      { prisma }
    ) => {
      try {
        const existingExtension = await prisma.limitedExtension.findFirst({
          where: {
            title,
          },
        });
        if (existingExtension) {
          throw new Error("This title is already taken");
        }
        await prisma.limitedExtension.create({
          data: {
            title,
            isCustom,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "Cant create account",
        };
      }
    },
  },
};
export default resolvers;
