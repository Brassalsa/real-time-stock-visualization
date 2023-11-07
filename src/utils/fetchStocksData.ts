"use server";

import { err } from "./errors";
import navLinks from "./nav_links";

export async function checkSymbol(symbol: string) {
  const sym = navLinks.map((i) => i[1]);
  return sym.includes(symbol);
}

export default async function fetchStocksData(symbol: string) {
  if (!(await checkSymbol(symbol))) {
    return err.not_found;
  }
  const to = Math.floor(Date.now() / 1000);

  const from = to - 24 * 60 * 60;
  const sym = symbol.toLocaleUpperCase();
  const uri = new URL(
    `https://finnhub.io/api/v1/stock/candle?symbol=${sym}&resolution=1&from=${from}&to=${to}&token=${process.env.FINN_API_KEY}`
  );
  const res = await fetch(uri);

  if (!res.ok) {
    console.log(res.statusText);

    return err.server_error;
  }
  const json = await res.json();

  return json;
}

export async function getRealTimeData(symbol: string) {
  if (!(await checkSymbol(symbol))) {
    return err.not_found;
  }
  const sym = symbol.toLocaleUpperCase();
  const res = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${sym}&token=${process.env.FINN_API_KEY}`
  );
  const json = await res.json();
  return json;
}
