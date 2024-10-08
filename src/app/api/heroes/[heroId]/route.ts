import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  context: { params: { heroId: string } }
) {
  const { heroId } = context.params;
  const res = await prisma.hero.findUnique({
    where: {
      id: parseInt(heroId),
    },
    select: {
      id: true,
      name: true,
      description: true,
      blurb: true,
    },
  });

  return NextResponse.json(res, { status: 200 });
}
