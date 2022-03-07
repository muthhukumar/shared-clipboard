/*
  Warnings:

  - You are about to drop the column `labelId` on the `TickList` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TickList" DROP CONSTRAINT "TickList_labelId_fkey";

-- AlterTable
ALTER TABLE "TickList" DROP COLUMN "labelId";

-- CreateTable
CREATE TABLE "LabelsOnTickList" (
    "tickListId" TEXT NOT NULL,
    "labelId" INTEGER NOT NULL,

    CONSTRAINT "LabelsOnTickList_pkey" PRIMARY KEY ("tickListId","labelId")
);

-- AddForeignKey
ALTER TABLE "LabelsOnTickList" ADD CONSTRAINT "LabelsOnTickList_tickListId_fkey" FOREIGN KEY ("tickListId") REFERENCES "TickList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabelsOnTickList" ADD CONSTRAINT "LabelsOnTickList_labelId_fkey" FOREIGN KEY ("labelId") REFERENCES "Label"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
