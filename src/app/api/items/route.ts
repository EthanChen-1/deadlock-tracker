import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const createItemSchema = z.object({
  name: z.string().min(1).max(255),
  price: z.number(),
  stats: z.string().array(),
  passive: z.string().array().optional(),
  active: z.string().array().optional(),
  type: z.enum(["weapon", "vitality", "spirit"]),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createItemSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }
  const newItem = await prisma.item.create({
    data: { ...validation.data },
  });
  return NextResponse.json(newItem, { status: 201 });
}
