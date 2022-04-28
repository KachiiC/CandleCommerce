-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_orderId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "orderId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Colour" (
    "colour" TEXT NOT NULL,
    "scents" TEXT[],

    CONSTRAINT "Colour_pkey" PRIMARY KEY ("colour")
);

-- CreateIndex
CREATE UNIQUE INDEX "Colour_colour_key" ON "Colour"("colour");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
