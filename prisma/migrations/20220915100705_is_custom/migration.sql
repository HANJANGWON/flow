/*
  Warnings:

  - Added the required column `isCustom` to the `LimitedExtension` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LimitedExtension" ADD COLUMN     "isCustom" BOOLEAN NOT NULL;
