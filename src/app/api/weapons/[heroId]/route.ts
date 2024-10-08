import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  context: { params: { heroId: string } }
) {
  const { heroId } = context.params;
  const res = await prisma.weapon.findUnique({
    where: {
      heroId: parseInt(heroId),
    },
    select: {
      dps: true,
      bulletdamage: true,
      ammo: true,
      bulletpersec: true,
      lightmelee: true,
      heavymelee: true,
    },
  });

  return NextResponse.json(res, { status: 200 });
}
