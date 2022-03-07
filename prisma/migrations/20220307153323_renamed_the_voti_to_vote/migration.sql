/*
  Warnings:

  - You are about to drop the `Voti` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Voti" DROP CONSTRAINT "Voti_userEmail_fkey";

-- DropTable
DROP TABLE "Voti";

-- CreateTable
CREATE TABLE "Vote" (
    "title" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "votes" INTEGER NOT NULL DEFAULT 0,
    "userEmail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "label" TEXT,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
