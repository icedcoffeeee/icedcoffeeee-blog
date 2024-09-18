"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

export default function AppendingLink({
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const path = usePathname()
    .split("/")
    .filter((v) => v !== "");
  href = path.concat([href ?? ""]).join("/");
  return <Link href={"/" + href} {...props} />;
}
