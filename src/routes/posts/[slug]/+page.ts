import { error } from "@sveltejs/kit";
import type { PageLoadEvent } from "./$types";
import { formatDate } from "$/lib";

export async function load({ params: { slug } }: PageLoadEvent) {
  try {
    const page = await import(/* @vite-ignore */ `../../../posts/${slug}.md`);
    page.metadata.date = formatDate(page.metadata.date);
    return { content: page.default, metadata: page.metadata };
  } catch (e) {
    error(404, "Not Found");
  }
}
