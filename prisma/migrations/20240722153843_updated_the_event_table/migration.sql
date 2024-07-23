/*
  Warnings:

  - You are about to drop the column `duratiion` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `note` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `owner` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `tytle` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `Event` table. All the data in the column will be lost.
  - Added the required column `title` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_usersId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "duratiion",
DROP COLUMN "note",
DROP COLUMN "owner",
DROP COLUMN "time",
DROP COLUMN "tytle",
DROP COLUMN "usersId",
ADD COLUMN     "title" TEXT NOT NULL;
