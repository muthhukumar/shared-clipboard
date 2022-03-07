/*
  Warnings:

  - You are about to drop the column `tickListId` on the `Label` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Label" DROP CONSTRAINT "Label_tickListId_fkey";

-- AlterTable
ALTER TABLE "Label" DROP COLUMN "tickListId";

-- AlterTable
ALTER TABLE "TickList" ADD COLUMN     "labelId" INTEGER;

-- DropEnum
DROP TYPE "Color";

-- AddForeignKey
ALTER TABLE "TickList" ADD CONSTRAINT "TickList_labelId_fkey" FOREIGN KEY ("labelId") REFERENCES "Label"("id") ON DELETE SET NULL ON UPDATE CASCADE;
