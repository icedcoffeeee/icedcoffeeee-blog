import { fp } from "@/lib";
import { readFileSync } from "fs";
import { notFound } from "next/navigation";

import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

type Page = { params: Promise<{ slug: string }> };
export default async function Page({ params }: Page) {
  const { slug } = await params;
  const filepath = fp("posts/" + slug + ".md");
  let contents;
  try {
    contents = readFileSync(filepath, "utf8");
  } catch {
    return notFound();
  }

  const { data, ...frontmatter } = matter(contents);
  const content = await remark()
    .use(html)
    .process(frontmatter.content)
    .then((v) => v.toString());

  // @ts-ignore
  const trueDate = new Date(slug.split("-").slice(0, 2));
  const formatDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <main className="flex flex-col items-center">
      <div className="max-w-lg">
        <span>{formatDate.format(trueDate)}</span>
        <h1 className="mt-0 mb-5">{data.title}</h1>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </main>
  );
}
