import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import prisma from "../../../../../prisma/client";

export async function GET(request: NextRequest) {
  const items = await prisma.item.findMany();
  return NextResponse.json(items, { status: 200 });
}
