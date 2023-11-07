import fetchStocksData from "@/utils/fetchStocksData";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
  try {
    const stock = req.nextUrl.searchParams.get("stock");
    if (stock) {
      const data = await fetchStocksData(stock);

      return new NextResponse(JSON.stringify(data));
    }
    return new NextResponse(JSON.stringify("Not found"), {
      status: 404,
      statusText: "Not found",
    });
  } catch (e) {
    return new NextResponse(JSON.stringify(e), {
      status: 500,
    });
  }
}

export { handler as GET };
