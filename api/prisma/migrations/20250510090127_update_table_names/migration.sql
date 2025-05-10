/*
  Warnings:

  - You are about to drop the `order_product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_product` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterForeignKey
ALTER TABLE "order_product" RENAME CONSTRAINT "order_product_order_id_fkey" TO "order_products_order_id_fkey";

-- AlterForeignKey
ALTER TABLE "order_product" RENAME CONSTRAINT "order_product_product_id_fkey" TO "order_products_product_id_fkey";

-- DropForeignKey
ALTER TABLE "user_product" RENAME CONSTRAINT "user_product_user_id_fkey" TO "orders_user_id_fkey";

-- AlterTable
ALTER TABLE "order_product" RENAME TO "order_products";

-- AlterTable
ALTER TABLE "product" RENAME TO "products";

-- AlterTable
ALTER TABLE "user" RENAME TO "users";

-- AlterTable
ALTER TABLE "user_product" RENAME TO "order";
