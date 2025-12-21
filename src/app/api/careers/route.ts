import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Career from "@/models/Career";

export async function POST(request: any) {
  try {
    const databody = await request.json();

    console.log(JSON.stringify(databody));

    const externalResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/career`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(databody),
      }
    );

    const externalResult = await externalResponse.json();

    if (!externalResponse.ok) {
      return new Response(
        JSON.stringify({
          error: externalResult?.error || "External API error",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: externalResult }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  try {
    const externalResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/career`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const externalResult = await externalResponse.json();

    if (!externalResponse.ok) {
      return new Response(
        JSON.stringify({
          error: externalResult?.error || "External API error",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: externalResult }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
