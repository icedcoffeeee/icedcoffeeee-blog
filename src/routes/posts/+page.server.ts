import { formatDate, type Post } from "$/lib";
import type { PageServerLoadEvent } from "./$types";

export async function load({ url }: PageServerLoadEvent) {
  const paths = import.meta.glob("$/posts/*.md", { eager: true });
  let posts = [];

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      let metadata = file.metadata as Post;
      metadata.date = formatDate(metadata.date);
      metadata.slug = slug;
      posts.push(metadata);
    }
  }

  const tags: string[] = new Set(posts.flatMap((p) => p.tags)).keys().toArray();
  const tagsC: string[] = url.searchParams.getAll("tag");

  posts = posts.filter((p) => tagsC.map((t) => p.tags.includes(t)).reduce((a, b) => a && b, true));

  return { posts, tags, tagsC };
}
