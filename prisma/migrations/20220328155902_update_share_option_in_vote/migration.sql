/*
  Warnings:

  - You are about to drop the column `sharedWith` on the `Vote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "sharedWith",
ADD COLUMN     "shareWith" "ShareOption" DEFAULT E'PRIVATE';
