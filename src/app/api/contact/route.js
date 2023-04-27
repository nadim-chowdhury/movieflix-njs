import dbConnect from "@/utils/dbConnect";
import Contact from "@/utils/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = req.json();
    await dbConnect();

    await Contact.create(body);

    return NextResponse.json(
      {
        message: "Sent Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: err,
      },
      {
        status: 500,
      }
    );
  }
}
