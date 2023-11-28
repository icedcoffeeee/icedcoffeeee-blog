import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Footer } from "@/components/footer";

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
          " bg-zinc-900 text-gray-400" +
          " h-screen w-full max-w-3xl p-3 leading-relaxed" +
          " flex flex-col"
        }
      >
        {children}
        <div className="grow" />
        <Footer />
      </body>
    </html>
  );
}
