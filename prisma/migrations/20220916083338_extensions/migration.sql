-- CreateTable
CREATE TABLE "LimitedExtension" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "isCustom" BOOLEAN NOT NULL,
    "isActivated" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LimitedExtension_pkey" PRIMARY KEY ("id")
);
