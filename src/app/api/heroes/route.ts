import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const createHeroSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createHeroSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const newHero = prisma.hero.create({
    data: { name: body.name, description: body.description },
  });

  return NextResponse.json(newHero, { status: 201 });
}

export async function GET(request: NextRequest, context: { id: number }) {
  const hero = await prisma.hero.findUnique({ where: { id: context.id } });
  return NextResponse.json(hero, { status: 200 });
}
