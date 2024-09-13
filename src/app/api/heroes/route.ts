import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const createHeroSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1),
  blurb: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createHeroSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const newHero = await prisma.hero.create({
    data: { name: body.name, description: body.description, blurb: body.blurb },
  });

  return NextResponse.json(newHero, { status: 201 });
}

export async function GET() {
  const hero = await prisma.hero.findMany();
  return NextResponse.json(hero, { status: 200 });
}
