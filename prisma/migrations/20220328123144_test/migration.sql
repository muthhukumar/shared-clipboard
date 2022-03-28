/*
  Warnings:

  - A unique constraint covering the columns `[requestFrom,requestTo]` on the table `Friend` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Friend_requestFrom_requestTo_key" ON "Friend"("requestFrom", "requestTo");
