/*
  Warnings:

  - Added the required column `name` to the `counties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `states` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "counties" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "states" ADD COLUMN     "name" TEXT NOT NULL;
