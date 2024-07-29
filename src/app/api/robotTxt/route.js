import dbConnect from "@/lib/db.connect";
import robottxts from "@/models/robots";
import { NextResponse } from "next/server";


export async function GET() {
  await dbConnect();
  const robotTxts = await robottxts.find();
  return NextResponse.json({ robotTxts });
}
