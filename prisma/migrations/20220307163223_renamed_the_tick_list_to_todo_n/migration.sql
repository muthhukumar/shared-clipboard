/*
  Warnings:

  - You are about to drop the `LabelsOnTickList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TickList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LabelsOnTickList" DROP CONSTRAINT "LabelsOnTickList_labelId_fkey";

-- DropForeignKey
ALTER TABLE "LabelsOnTickList" DROP CONSTRAINT "LabelsOnTickList_tickListId_fkey";

-- DropForeignKey
ALTER TABLE "TickList" DROP CONSTRAINT "TickList_userEmail_fkey";

-- DropTable
DROP TABLE "LabelsOnTickList";

-- DropTable
DROP TABLE "TickList";

-- CreateTable
CREATE TABLE "Todo" (
    "title" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "description" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "dueDate" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "priority" "Priority" NOT NULL DEFAULT E'NORMAL'
);

-- CreateTable
CREATE TABLE "LabelsOnTodo" (
    "todoId" TEXT NOT NULL,
    "labelId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "LabelsOnTodo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Todo_id_key" ON "Todo"("id");

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabelsOnTodo" ADD CONSTRAINT "LabelsOnTodo_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "Todo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabelsOnTodo" ADD CONSTRAINT "LabelsOnTodo_labelId_fkey" FOREIGN KEY ("labelId") REFERENCES "Label"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
