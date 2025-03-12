import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { GitHub, X } from "@/components/icons";
import { Karla, IBM_Plex_Mono } from "next/font/google";
import { ReactNode } from "react";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const ibm_plex_mono = IBM_Plex_Mono({
  weight: "500",
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
          <span className="w-1/2 flex gap-4 justify-end items-center">
            <Link
              href={"https://github.com/icedcoffeeee"}
              target="_blank"
              className="h-[60%]"
            >
              <GitHub></GitHub>
            </Link>
            <Link
              href={"https://x.com/@hazymm_"}
              target="_blank"
              className="h-[60%]"
            >
              <X></X>
            </Link>
          </span>
        </nav>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
