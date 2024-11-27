// app/api/reviews/get_list/route.ts

import { NextRequest, NextResponse } from "next/server";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function GET(req: NextRequest) {
  try {
    // Extract page and limit from the query parameters
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page_num") || "1", 10);
    const limit = parseInt(searchParams.get("display") || "10", 10);

    // Make a request to the Django server with page and limit as query parameters
    const res = await fetch(
      `http://3.39.234.40/api/reviews?page_num=${page}&display=${limit}`
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Server response:", errorText);
      throw new Error("Failed to fetch reviews from the server");
    }

    const json = await res.json();

    const response = NextResponse.json(json);

    return response;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.error();
  }
}
