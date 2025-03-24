// app/api/airports/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const type = searchParams.get("type") || "name";

  if (!query) return NextResponse.json([], { status: 200 });

  const API_KEY = "RNST49g0bahicLrZ4AQbkg==0ajdoOwjutXiJsO1";
  const API_URL = `https://api.api-ninjas.com/v1/airports?${type}=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(API_URL, {
      headers: { "X-Api-Key": API_KEY },
    });

    if (!response.ok) throw new Error(`Error en la API: ${response.statusText}`);

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error en la API Route:", error);
    return NextResponse.json([], { status: 500 });
  }
}
