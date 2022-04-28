/*
  Warnings:

  - A unique constraint covering the columns `[colour]` on the table `Colour` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Colour_colour_key" ON "Colour"("colour");
