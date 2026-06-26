import { NextResponse } from "next/server";

export async function GET() {
  try {
    // do Something
    const result = "Test";

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error creating entry:", error);
    return NextResponse.json(
      { message: "Error creating entry." },
      { status: 500 }
    );
  }
}
