import { users } from "../users";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const user = users.find((user) => user.id + "" === params.userId);
  return NextResponse.json({ data: user });
}
