-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pending', 'Accepeted', 'Rejected');

-- CreateTable
CREATE TABLE "Friend" (
    "id" TEXT NOT NULL,
    "requestFrom" TEXT NOT NULL,
    "requestTo" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'Pending',
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "Friend_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
