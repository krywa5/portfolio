import { sendContactMail } from "@/libs/sendContactMail";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(request: any) {
  try {
    const req = await request.json();

    await sendContactMail(req);

    return NextResponse.json(request);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
