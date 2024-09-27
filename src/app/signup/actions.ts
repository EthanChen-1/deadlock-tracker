"use server";

import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../prisma/client";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function signup(formData: FormData) {
  const validation = createUserSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success) {
    return NextResponse.json(
      { errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }
  const hashedPassword = await bcrypt.hash(validation.data.password, 10);

  const newUser = await prisma.user.create({
    data: { email: validation.data.email, password: hashedPassword },
  });

  redirect("/");
}
