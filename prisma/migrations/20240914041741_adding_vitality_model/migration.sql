-- CreateTable
CREATE TABLE "Vitality" (
    "id" SERIAL NOT NULL,
    "health" DOUBLE PRECISION NOT NULL,
    "healthregen" DOUBLE PRECISION NOT NULL,
    "bulletresist" DOUBLE PRECISION NOT NULL,
    "spiritresist" DOUBLE PRECISION NOT NULL,
    "movespeed" DOUBLE PRECISION NOT NULL,
    "sprintspeed" DOUBLE PRECISION NOT NULL,
    "stamina" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vitality_pkey" PRIMARY KEY ("id")
);
