-- CreateEnum
CREATE TYPE "ShareOption" AS ENUM ('PRIVATE', 'PUBLIC', 'FRIENDS');

-- DropIndex
DROP INDEX "Friend_requestFrom_requestTo_key";

-- AlterTable
ALTER TABLE "Vote" ADD COLUMN     "sharedWith" "ShareOption" DEFAULT E'PRIVATE';
