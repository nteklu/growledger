import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrowLedger",
  description:
    "Crop-cycle cost, yield, and economic impact analytics for small controlled-environment growers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
