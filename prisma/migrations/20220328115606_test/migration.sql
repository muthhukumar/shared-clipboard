/*
  Warnings:

  - A unique constraint covering the columns `[personalId]` on the table `UniqueReference` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UniqueReference_personalId_key" ON "UniqueReference"("personalId");
