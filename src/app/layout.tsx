import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Stocks Data Provider",
  description: "Stocks Data Provider for : AAPL, MSFT, TSLA, AMZN, META",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
