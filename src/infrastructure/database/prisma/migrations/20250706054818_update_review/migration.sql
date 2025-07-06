/*
  Warnings:

  - A unique constraint covering the columns `[idUser,idProduct]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Review_idUser_idProduct_key" ON "Review"("idUser", "idProduct");
