/*
  Warnings:

  - You are about to drop the column `componentof` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `components` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "componentof",
DROP COLUMN "components";
