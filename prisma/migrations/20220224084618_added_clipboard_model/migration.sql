-- CreateTable
CREATE TABLE "ClipboardContent" (
    "content" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "userEmail" TEXT,

    CONSTRAINT "ClipboardContent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClipboardContent" ADD CONSTRAINT "ClipboardContent_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
