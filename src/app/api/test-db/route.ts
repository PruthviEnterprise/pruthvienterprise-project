import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function GET() {
  try {
    await connectToDB();

    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .limit(5);

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      data: contacts,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
