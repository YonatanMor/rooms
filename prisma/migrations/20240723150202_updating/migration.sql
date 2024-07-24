/*
  Warnings:

  - Added the required column `classroom` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "classroom" TEXT NOT NULL,
ADD COLUMN     "hour" TEXT NOT NULL;
