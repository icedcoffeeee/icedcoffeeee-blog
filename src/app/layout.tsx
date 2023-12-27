import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "icedcoffeeee | Hazim Saharuddin",
  description: "Personal Site of Hazim Saharuddin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full flex justify-center">
      <body
        className={
          GeistSans.className +
          " bg-primary text-tertiary" +
          " h-screen w-full max-w-3xl p-3 leading-relaxed" +
          " flex flex-col"
        }
      >
        <Link href={"/"} className="underline underline-offset-4 my-3">
          icedcoffeeee
        </Link>
        {children}
        <div className="grow" />
        <Footer />
      </body>
    </html>
  );
}
