import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const createAbilitySchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1),
  upgrades: z.string().array(),
  heroId: z.number(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createAbilitySchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }
  const newAbility = await prisma.ability.create({
    data: {
      name: body.name,
      description: body.description,
      upgrades: body.upgrades,
      heroId: body.heroId,
    },
  });

  return NextResponse.json(newAbility, { status: 201 });
}
