import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const createWeaponSchema = z.object({
  dps: z.number(),
  bulletdamage: z.number(),
  ammo: z.number(),
  bulletpersec: z.number(),
  lightmelee: z.number(),
  heavymelee: z.number(),
  heroId: z.number(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createWeaponSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const newWeapon = await prisma.weapon.create({
    data: {
      dps: body.dps,
      bulletdamage: body.bulletdamage,
      ammo: body.ammo,
      bulletpersec: body.bulletpersec,
      lightmelee: body.lightmelee,
      heavymelee: body.heavymelee,
      heroId: body.heroId,
    },
  });

  return NextResponse.json(newWeapon, { status: 201 });
}
