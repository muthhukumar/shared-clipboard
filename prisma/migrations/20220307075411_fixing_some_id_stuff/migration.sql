/*
  Warnings:

  - The primary key for the `LabelsOnTickList` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "LabelsOnTickList" DROP CONSTRAINT "LabelsOnTickList_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "LabelsOnTickList_pkey" PRIMARY KEY ("id");
