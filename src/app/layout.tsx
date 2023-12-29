import { Footer } from "@/components/footer";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import orbital from "public/orbital.gif";
import "./globals.css";

export const metadata: Metadata = {
  title: "icedcoffeeee | Hazim Saharuddin",
  description: "Personal Site of Hazim Saharuddin",
  metadataBase: new URL("https://icedcoffeeee.vercel.app"),
  openGraph: { images: "/me.jpg" },
  twitter: { images: "/me.jpg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full flex justify-center bg-black">
        <Image
          src={orbital}
          alt={"background"}
          className="object-cover min-w-full self-center fixed -z-50 scale-150"
        />
        <div className="min-h-full min-w-full bg-primary/50 backdrop-blur-sm md:backdrop-blur-lg -z-10 fixed top-0 left-0" />
        <div
          className={
            GeistSans.className +
            " text-tertiary" +
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
        </div>
      </body>
    </html>
  );
}
