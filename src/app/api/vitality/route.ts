import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const createVitalitySchema = z.object({
  health: z.number(),
  healthregen: z.number(),
  bulletresist: z.number(),
  spiritresist: z.number(),
  movespeed: z.number(),
  sprintspeed: z.number(),
  stamina: z.number(),
  heroId: z.number(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createVitalitySchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const newVitality = await prisma.vitality.create({
    data: {
      health: body.health,
      healthregen: body.healthregen,
      bulletresist: body.bulletresist,
      spiritresist: body.spiritresist,
      movespeed: body.movespeed,
      sprintspeed: body.sprintspeed,
      stamina: body.stamina,
      heroId: body.heroId,
    },
  });

  return NextResponse.json(newVitality, { status: 201 });
}
