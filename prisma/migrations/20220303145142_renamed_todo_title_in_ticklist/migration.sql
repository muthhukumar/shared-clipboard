/*
  Warnings:

  - You are about to drop the column `todo` on the `TickList` table. All the data in the column will be lost.
  - Added the required column `title` to the `TickList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TickList" DROP COLUMN "todo",
ADD COLUMN     "title" TEXT NOT NULL;
