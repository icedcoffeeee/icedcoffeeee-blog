import { error } from "@sveltejs/kit";
import type { PageLoadEvent } from "./$types";

export async function load({ params: { slug } }: PageLoadEvent) {
  try {
    const page = await import(/* @vite-ignore */ `./${slug}.md`);
    return { content: page.default };
  } catch (e) {
    error(404, "Not Found");
  }
}
