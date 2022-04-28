/*
  Warnings:

  - The primary key for the `Colour` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `colours` on the `Product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Colour_colour_key";

-- AlterTable
ALTER TABLE "Colour" DROP CONSTRAINT "Colour_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "productId" INTEGER,
ADD CONSTRAINT "Colour_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "colours";

-- AddForeignKey
ALTER TABLE "Colour" ADD CONSTRAINT "Colour_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
