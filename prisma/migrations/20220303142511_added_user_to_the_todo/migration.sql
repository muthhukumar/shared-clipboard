/*
  Warnings:

  - Made the column `userEmail` on table `ClipboardContent` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userEmail` on table `Note` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userEmail` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ClipboardContent" DROP CONSTRAINT "ClipboardContent_userEmail_fkey";

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_userEmail_fkey";

-- AlterTable
ALTER TABLE "ClipboardContent" ALTER COLUMN "userEmail" SET NOT NULL;

-- AlterTable
ALTER TABLE "Note" ALTER COLUMN "userEmail" SET NOT NULL;

-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ClipboardContent" ADD CONSTRAINT "ClipboardContent_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
