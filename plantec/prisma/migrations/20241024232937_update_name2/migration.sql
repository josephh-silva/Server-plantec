/*
  Warnings:

  - Added the required column `namePlant` to the `Plants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plants" ADD COLUMN     "namePlant" VARCHAR(255) NOT NULL,
ALTER COLUMN "plantingTime" DROP NOT NULL;
