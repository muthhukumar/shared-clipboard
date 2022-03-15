/*
  Warnings:

  - You are about to drop the `Birthday` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Birthday" DROP CONSTRAINT "Birthday_userEmail_fkey";

-- DropTable
DROP TABLE "Birthday";
