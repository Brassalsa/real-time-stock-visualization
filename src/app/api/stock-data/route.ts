import { getRealTimeData } from "@/utils/fetchStocksData";

import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
  const stock = req.nextUrl.searchParams.get("stock");
  if (stock) {
    const data = await getRealTimeData(stock);

    return new NextResponse(JSON.stringify(data));
  }
}

export { handler as GET };
