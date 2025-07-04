/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Role" (
    "idRole" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("idRole")
);

-- CreateTable
CREATE TABLE "User" (
    "idUser" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idRole" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "Review" (
    "idReview" SERIAL NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUser" INTEGER NOT NULL,
    "idProduct" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("idReview")
);

-- CreateTable
CREATE TABLE "Image" (
    "idImage" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "altText" TEXT NOT NULL,
    "idProduct" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("idImage")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "Role"("idRole") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;
