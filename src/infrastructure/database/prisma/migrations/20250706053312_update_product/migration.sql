/*
  Warnings:

  - A unique constraint covering the columns `[name,idBrand]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_name_idBrand_key" ON "Product"("name", "idBrand");
