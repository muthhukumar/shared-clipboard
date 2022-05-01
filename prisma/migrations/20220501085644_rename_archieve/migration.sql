/*
  Warnings:

  - You are about to drop the column `isArchieved` on the `Vote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "isArchieved",
ADD COLUMN     "isArchived" BOOLEAN NOT NULL DEFAULT false;
