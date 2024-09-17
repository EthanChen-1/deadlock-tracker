-- CreateTable
CREATE TABLE "Ability" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "upgrades" TEXT[],
    "heroId" INTEGER NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ability_heroId_key" ON "Ability"("heroId");

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
