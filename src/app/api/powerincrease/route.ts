import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const createPowerIncreaseSchema = z.object({
  modifiers: z.string().array(),
  heroId: z.number(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createPowerIncreaseSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }
  const newAbility = await prisma.powerIncrease.create({
    data: {
      modifiers: body.modifiers,
      heroId: body.heroId,
    },
  });
  return NextResponse.json(newAbility, { status: 201 });
}
