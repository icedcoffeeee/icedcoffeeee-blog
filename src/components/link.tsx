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
    .filter((v, i, a) => a.indexOf(v) === i);
  href = path.concat([href ?? ""]).join("/");
  console.log(path);
  return <Link href={href} {...props} />;
}
