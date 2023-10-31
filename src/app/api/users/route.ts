import { NextResponse, NextRequest } from "next/server";
import { users } from "./users";

export async function GET() {
  return NextResponse.json({ data: users, page: 1, total: 3 });
}

export async function POST(request: Request) {
  const user = await request.json();
  users.push({ id: Math.floor(Math.random() * 10000), ...user });
  return NextResponse.json({ msg: "success" });
}
