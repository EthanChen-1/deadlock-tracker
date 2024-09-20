-- CreateTable
CREATE TABLE "PowerIncrease" (
    "id" SERIAL NOT NULL,
    "modifiers" TEXT[],
    "heroId" INTEGER NOT NULL,

    CONSTRAINT "PowerIncrease_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PowerIncrease_heroId_key" ON "PowerIncrease"("heroId");

-- AddForeignKey
ALTER TABLE "PowerIncrease" ADD CONSTRAINT "PowerIncrease_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
