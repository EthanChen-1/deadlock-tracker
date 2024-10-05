import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";
import { revalidatePath } from "next/cache";

const createHeroSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1),
  blurb: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createHeroSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }
  const newHero = await prisma.hero.create({
    data: { name: body.name, description: body.description, blurb: body.blurb },
  });

  revalidatePath("/heroes");

  return NextResponse.json(newHero, { status: 201 });
}

export async function GET() {
  const hero = await prisma.hero.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
  });
  return NextResponse.json(hero, { status: 200 });
}
