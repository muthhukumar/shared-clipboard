-- CreateTable
CREATE TABLE "ShortURL" (
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userEmail" TEXT,

    CONSTRAINT "ShortURL_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShortURL_slug_key" ON "ShortURL"("slug");

-- AddForeignKey
ALTER TABLE "ShortURL" ADD CONSTRAINT "ShortURL_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
