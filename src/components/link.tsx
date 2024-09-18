"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, useEffect } from "react";

export default function AppendingLink({
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const path = usePathname()
    .split("/")
    .filter((v) => v !== "");
  href = path.concat([href ?? ""]).join("/");
  useEffect(() => {
    if (window.innerWidth < 640)
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
      });
    else
      window.scrollTo({
        top: 0,
        left: document.body.scrollWidth,
      });
  }, []);
  return <Link href={"/" + href} {...props} />;
}
