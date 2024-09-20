import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  context: { params: { heroId: string } }
) {
  const { heroId } = context.params;
  const res = await prisma.powerIncrease.findUnique({
    where: {
      heroId: parseInt(heroId),
    },
    select: {
      modifiers: true,
    },
  });

  return NextResponse.json(res, { status: 200 });
}
