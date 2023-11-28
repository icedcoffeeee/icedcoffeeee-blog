import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="border-t-2 pt-2 flex justify-between">
      <p>Hazim Saharuddin</p>
      <div className="flex gap-2">
        <Link href={"https://twitter.com/hazymm_"} target="_blank">
          <Twitter strokeWidth={1} />
        </Link>
        <Link href={"https://github.com/icedcoffeeee"} target="_blank">
          <Github strokeWidth={1} />
        </Link>
        <Link href={"https://www.linkedin.com/in/ilmi-hazim-saharuddin-a6369025a/"} target="_blank">
          <Linkedin strokeWidth={1} />
        </Link>
      </div>
    </div>
  );
}
