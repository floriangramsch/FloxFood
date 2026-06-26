import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const req = await request.json();

    // do something;

    return NextResponse.json({ status: 201 });
  } catch (error) {
    console.error("Error creating entry:", error);
    return NextResponse.json(
      { message: "Error creating entry." },
      { status: 500 }
    );
  }
}
