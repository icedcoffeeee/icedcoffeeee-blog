import "./globals.css";
import type { Metadata } from "next";
import { Karla, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const ibm_plex_mono = IBM_Plex_Mono({
  weight: "700",
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "icedcoffeeee",
  description: "icedcoffeeee's personal site",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={[
          karla.variable,
          ibm_plex_mono.variable,
          "bg-background text-foreground font-sans",
          "w-full min-h-svh",
          "antialiased",
        ].join(" ")}
      >
        <nav className="sticky top-0 z-10 font-mono font-bold w-full flex justify-between p-4 bg-background/20 backdrop-blur">
          <Link href="/">icedcoffeeee</Link>
          <span className="flex gap-4">
            <Link href="/about">about</Link>
            <Link href="/">blog</Link>
          </span>
        </nav>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
