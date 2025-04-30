import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, brevoApiKey, brevoListId } = await req.json();

  if (!email || !brevoApiKey || !brevoListId) {
    return NextResponse.json(
      { message: "Missing parameters" },
      { status: 400 }
    );
  }

  try {
    const brevoUrl = "https://api.brevo.com/v3/contacts";

    const response = await fetch(brevoUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(brevoListId)],
        updateEnabled: false, // Update existing contacts
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo API error", data);
      return NextResponse.json({ message: "Brevo API Error" }, { status: 500 });
    }

    console.log(data);
    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { message: error.message || "Subscription failed" },
      { status: 500 }
    );
  }
}
