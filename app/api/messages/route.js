import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export const runtime = "edge";

const getMessages = async () => {
  const messages = await kv.lrange("messages", 0, -1);
  return messages;
};

export async function GET() {
  return NextResponse.json(await getMessages());
}

export async function POST(req, res) {
  const body = await req.json();
  const length = (await getMessages()).length;
  const result = await kv.lpush("messages", {
    id: length,
    ...body,
  });
  return NextResponse.json(result);
}

export async function DELETE(req, res) {
  const result = await kv.del("messages");
  return NextResponse.json(result);
}
