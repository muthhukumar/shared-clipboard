-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('HIGH', 'LOW', 'MEDIUM', 'NORMAL');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('ED0000', 'F4A522', 'F81CE5');

-- AlterTable
ALTER TABLE "TickList" ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT E'NORMAL';

-- CreateTable
CREATE TABLE "Label" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "userEmail" TEXT,
    "tickListId" TEXT,

    CONSTRAINT "Label_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Label" ADD CONSTRAINT "Label_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Label" ADD CONSTRAINT "Label_tickListId_fkey" FOREIGN KEY ("tickListId") REFERENCES "TickList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
