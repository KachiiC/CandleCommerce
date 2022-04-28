/*
  Warnings:

  - You are about to drop the column `name` on the `Colour` table. All the data in the column will be lost.
  - Added the required column `colour` to the `Colour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Colour" DROP COLUMN "name",
ADD COLUMN     "colour" TEXT NOT NULL;
