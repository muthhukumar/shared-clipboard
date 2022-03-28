/*
  Warnings:

  - The values [Accepeted] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[personalId]` on the table `UniqueReference` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('Pending', 'Accepted', 'Rejected');
ALTER TABLE "Friend" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Friend" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "Friend" ALTER COLUMN "status" SET DEFAULT 'Pending';
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "UniqueReference_personalId_key" ON "UniqueReference"("personalId");
