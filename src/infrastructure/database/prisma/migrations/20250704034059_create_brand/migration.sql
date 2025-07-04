/*
  Warnings:

  - Added the required column `idBrand` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "idBrand" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "idCountry" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("idCountry")
);

-- CreateTable
CREATE TABLE "Brand" (
    "idBrand" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "idCountry" INTEGER NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("idBrand")
);

-- AddForeignKey
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_idCountry_fkey" FOREIGN KEY ("idCountry") REFERENCES "Country"("idCountry") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_idBrand_fkey" FOREIGN KEY ("idBrand") REFERENCES "Brand"("idBrand") ON DELETE RESTRICT ON UPDATE CASCADE;
