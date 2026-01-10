"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import * as Tooltip from "@radix-ui/react-tooltip";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Tooltip.Provider delayDuration={300}>
          {children}
        </Tooltip.Provider>
      </body>
    </html>
  );
}
