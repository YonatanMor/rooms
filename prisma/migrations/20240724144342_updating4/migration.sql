/*
  Warnings:

  - Added the required column `note` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "duration" INTEGER,
ADD COLUMN     "note" TEXT NOT NULL;
