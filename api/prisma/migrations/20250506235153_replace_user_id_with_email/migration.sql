/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_product" DROP CONSTRAINT "user_product_user_id_fkey";

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("email");

-- AddForeignKey
ALTER TABLE "user_product" ADD CONSTRAINT "user_product_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("email") ON DELETE CASCADE ON UPDATE CASCADE;
