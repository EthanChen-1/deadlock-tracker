import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = new TextEncoder().encode(process.env.JSON_SECRET_KEY);

const cookie = {
  name: "session",
  options: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
  duration: 24 * 60 * 60 * 1000,
};

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(session: any) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createSession(userId: number) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ userId, expires });
  cookies().set(cookie.name, session, { ...cookie.options, expires });
  redirect("/");
}

export async function verifySession() {
  const theCookie = cookies().get(cookie.name)?.value;
  const session = await decrypt(theCookie);
  if (!session?.userId) {
    redirect("/login");
  }
  return { userId: session.userId };
}

export async function deleteSession() {
  cookies().delete(cookie.name);
  redirect("/login");
}