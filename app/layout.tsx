import React from "react";
import "./globals.css";
import { Arimo } from "next/font/google";

import Providers from "./providers";

const arimo = Arimo({
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={arimo.className}>
      <body className="bg-black text-white font-arimo text-base font-normal">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
