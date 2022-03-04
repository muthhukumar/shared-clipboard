/*
  Warnings:

  - You are about to drop the column `title` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "title",
ALTER COLUMN "description" DROP NOT NULL;
