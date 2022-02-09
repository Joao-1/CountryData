-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "capital" TEXT NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "CountryId" INTEGER NOT NULL,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "counties" (
    "id" SERIAL NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "counties_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "states" ADD CONSTRAINT "states_CountryId_fkey" FOREIGN KEY ("CountryId") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counties" ADD CONSTRAINT "counties_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
