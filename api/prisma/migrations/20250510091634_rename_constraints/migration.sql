-- AlterTable
ALTER TABLE "order_products" RENAME CONSTRAINT "order_product_pkey" TO "order_products_pkey";

-- AlterTable
ALTER TABLE "orders" RENAME CONSTRAINT "user_product_pkey" TO "orders_pkey";

-- AlterTable
ALTER TABLE "products" RENAME CONSTRAINT "product_pkey" TO "products_pkey";

-- AlterTable
ALTER TABLE "users" RENAME CONSTRAINT "user_pkey" TO "users_pkey";

-- RenameIndex
ALTER INDEX "order_product_order_id_product_id_key" RENAME TO "order_products_order_id_product_id_key";
