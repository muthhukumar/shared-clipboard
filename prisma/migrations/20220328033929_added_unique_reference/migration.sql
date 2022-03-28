-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "todoId" TEXT NOT NULL,
    "repeatStart" INTEGER NOT NULL,
    "repeatInterval" INTEGER,
    "repeatYear" INTEGER,
    "repeatMonth" INTEGER,
    "repeatDay" INTEGER,
    "repeatWeek" INTEGER,
    "repeatWeekday" INTEGER,
    "repeatEnd" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stack" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Stack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniqueReference" (
    "personalId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UniqueReference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_todoId_key" ON "Event"("todoId");

-- CreateIndex
CREATE UNIQUE INDEX "UniqueReference_userId_key" ON "UniqueReference"("userId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "Todo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniqueReference" ADD CONSTRAINT "UniqueReference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
