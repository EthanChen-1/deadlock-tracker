import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  context: { params: { heroId: string } }
) {
  const { heroId } = context.params;
  const res = await prisma.vitality.findUnique({
    where: {
      heroId: parseInt(heroId),
    },
    select: {
      health: true,
      healthregen: true,
      bulletresist: true,
      spiritresist: true,
      movespeed: true,
      sprintspeed: true,
      stamina: true,
    },
  });

  return NextResponse.json(res, { status: 200 });
}
