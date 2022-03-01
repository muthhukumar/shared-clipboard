/*
  Warnings:

  - Added the required column `title` to the `ClipboardContent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClipboardContent" ADD COLUMN     "title" TEXT NOT NULL;
