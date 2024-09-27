import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const hashedPassword = await bcrypt.hash(body.password, 10);
  const newUser = await prisma.user.create({
    data: { email: body.email, password: hashedPassword },
  });
  return NextResponse.json(newUser, { status: 201 });
}
