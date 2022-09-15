/*
  Warnings:

  - You are about to drop the `Limited` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Limited";

-- CreateTable
CREATE TABLE "LimitedExtension" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "LimitedExtension_pkey" PRIMARY KEY ("id")
);
