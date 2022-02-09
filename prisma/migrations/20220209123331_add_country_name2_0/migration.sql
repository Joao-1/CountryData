/*
  Warnings:

  - You are about to drop the column `nome` on the `countries` table. All the data in the column will be lost.
  - Added the required column `name` to the `countries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "countries" DROP COLUMN "nome",
ADD COLUMN     "name" TEXT NOT NULL;
