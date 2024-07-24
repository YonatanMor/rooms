/*
  Warnings:

  - Made the column `classroom` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hour` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "classroom" SET NOT NULL,
ALTER COLUMN "hour" SET NOT NULL;
