import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "./components/sidebar";

const graphik = localFont({
  src: [
    {
      path: "../public/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-graphik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leerob.io"),
  title: {
    default: "Hazim Saharuddin",
    template: "%s | Hazim Saharuddin",
  },
  description: "Developer, writer, and creator.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-white bg-[#0F172A]",
        graphik.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
