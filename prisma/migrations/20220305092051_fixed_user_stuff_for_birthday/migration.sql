-- AlterTable
ALTER TABLE "Birthday" ADD COLUMN     "userEmail" TEXT;

-- AddForeignKey
ALTER TABLE "Birthday" ADD CONSTRAINT "Birthday_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
