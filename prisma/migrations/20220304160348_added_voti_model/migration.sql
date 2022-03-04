-- CreateTable
CREATE TABLE "Voti" (
    "title" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "votes" INTEGER NOT NULL DEFAULT 0,
    "userEmail" TEXT,

    CONSTRAINT "Voti_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Voti" ADD CONSTRAINT "Voti_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
