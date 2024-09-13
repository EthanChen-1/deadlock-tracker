-- CreateTable
CREATE TABLE "Weapon" (
    "id" SERIAL NOT NULL,
    "dps" DOUBLE PRECISION NOT NULL,
    "bulletdamage" DOUBLE PRECISION NOT NULL,
    "ammo" DOUBLE PRECISION NOT NULL,
    "bulletpersec" DOUBLE PRECISION NOT NULL,
    "lightmelee" DOUBLE PRECISION NOT NULL,
    "heavymelee" DOUBLE PRECISION NOT NULL,
    "heroId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Weapon_heroId_key" ON "Weapon"("heroId");

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
