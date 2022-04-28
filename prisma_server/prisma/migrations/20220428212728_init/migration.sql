/*
  Warnings:

  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Colour` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductColours` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Colour" AS ENUM ('Black', 'Blue', 'Cream', 'Green', 'Grey', 'Orange', 'Pink', 'Purple', 'Red', 'White', 'Yellow');

-- DropForeignKey
ALTER TABLE "ProductColours" DROP CONSTRAINT "ProductColours_colourId_fkey";

-- DropForeignKey
ALTER TABLE "ProductColours" DROP CONSTRAINT "ProductColours_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price",
ADD COLUMN     "colour" "Colour",
ADD COLUMN     "scents" TEXT[],
ALTER COLUMN "description" SET NOT NULL;

-- DropTable
DROP TABLE "Colour";

-- DropTable
DROP TABLE "ProductColours";
