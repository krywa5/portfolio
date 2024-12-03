import { sendContactMail } from "@/libs/sendContactMail";
import { NextResponse } from "next/server";

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
