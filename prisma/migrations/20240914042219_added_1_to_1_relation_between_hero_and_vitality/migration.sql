/*
  Warnings:

  - A unique constraint covering the columns `[heroId]` on the table `Vitality` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `heroId` to the `Vitality` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vitality" ADD COLUMN     "heroId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vitality_heroId_key" ON "Vitality"("heroId");

-- AddForeignKey
ALTER TABLE "Vitality" ADD CONSTRAINT "Vitality_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
