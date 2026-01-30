import { stackServerApp } from "@stackframe/stack/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Webhook recibido:", body);

  return Response.json({ ok: true });
}
