import { Resolvers } from "../../types";
import { createExtensionInput } from "./createExtention.dto";

const resolvers: Resolvers = {
  Mutation: {
    createExtension: async (
      _,
      { title, isCustom, isActivated }: createExtensionInput,
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
            isActivated,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "Cant create extension",
        };
      }
    },
  },
};
export default resolvers;
