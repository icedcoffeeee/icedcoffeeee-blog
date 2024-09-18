import type { Metadata } from "next";
import "./globals.css";

import { EB_Garamond } from "next/font/google";
import { Homemade_Apple } from "next/font/google";
const eb_garamond = EB_Garamond({ subsets: ["latin"], display: "swap" });
const homemade_apple = Homemade_Apple({
  subsets: ["latin"],
  weight: "400",
  variable: "--homemade-apple",
});

export const metadata: Metadata = {
  title: "Hazim Saharuddin",
  description: "Personal Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eb_garamond.className} ${homemade_apple.variable} antialiased`}
      >
        <div className="flex flex-col sm:flex-row">{children}</div>
      </body>
    </html>
  );
}
