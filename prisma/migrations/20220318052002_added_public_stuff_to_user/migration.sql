-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isHabitsRankPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isTodoPublic" BOOLEAN NOT NULL DEFAULT false;
