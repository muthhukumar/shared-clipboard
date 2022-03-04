/*
  Warnings:

  - Made the column `dueDate` on table `TickList` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "TickList" ALTER COLUMN "dueDate" SET NOT NULL,
ALTER COLUMN "dueDate" DROP DEFAULT,
ALTER COLUMN "dueDate" SET DATA TYPE TEXT;
