-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(355) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plants" (
    "id" SERIAL NOT NULL,
    "typeOfPlant" VARCHAR(255) NOT NULL,
    "descriptionOfPlant" VARCHAR(255),
    "planted" BOOLEAN NOT NULL DEFAULT false,
    "plantingTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER,

    CONSTRAINT "Plants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Plants" ADD CONSTRAINT "Plants_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
