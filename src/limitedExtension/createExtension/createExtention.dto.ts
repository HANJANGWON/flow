import { LimitedExtension } from "@prisma/client";

export type createExtensionInput = Pick<
  LimitedExtension,
  "title" | "isCustom" | "isActivated"
>;
