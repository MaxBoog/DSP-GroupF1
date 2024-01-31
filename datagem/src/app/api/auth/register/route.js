import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request) {
  try {
    const { company_name, email, password } = await request.json();
    // validate email and password
    // console.log({ email, password });

    const hashedPassword = await hash(password, 10);

    const response = await sql`
      INSERT INTO users (name, email, password)
      VALUES (${company_name},${email}, ${hashedPassword})
    `;
  } catch (e) {
    return NextResponse.json({
      error: true,
      code: e.code,
      message: "Registration failed",
    });
  }

  return NextResponse.json({ message: "success" });
}
