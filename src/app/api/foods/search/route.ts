import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { query } = await req.json();

  const response = await fetch(
    `${process.env.BASE_URL}/foods/search?api_key=${process.env.API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        pageSize: 10,
        dataType: ["Foundation", "SR Legacy", "Survey (FNDDS)"],
      }),
    },
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: await response.text() },
      { status: response.status },
    );
  }

  return NextResponse.json(await response.json());
}
