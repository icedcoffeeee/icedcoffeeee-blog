import { goto } from "$app/navigation";
import { page } from "$app/state";

export type Post = {
  slug: string;
  date: string;
  title: string;
  tags: string[];
};

const intl = Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" });

export function formatDate(isoDate: string) {
  return intl.format(new Date(isoDate));
}

export function gotoFilterTag(tag: string) {
  const url = page.url;
  url.toString().includes(tag)
    ? url.searchParams.delete("tag", tag)
    : url.searchParams.append("tag", tag);
  url.pathname = "/posts";
  goto(url, { invalidateAll: true });
}
