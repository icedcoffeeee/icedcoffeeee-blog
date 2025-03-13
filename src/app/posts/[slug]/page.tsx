import { fp } from "@/lib";
import { readFileSync } from "fs";
import { notFound } from "next/navigation";

import matter from "gray-matter";
import { unified } from "unified";
import parse from "remark-parse";
import math from "remark-math";
import mark2hype from "remark-rehype";
import stringify from "rehype-stringify";
import katex from "rehype-katex";

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
  const content = await unified()
    .use(parse)
    .use(math)
    .use(mark2hype)
    .use(katex, {
      displayMode: true,
      macros: {
        "\\vb": "\\bold",
        "\\va": "\\vec{\\bold #1}",
        "\\dd": "\\,\\mathrm{d}",
      },
    })
    .use(stringify)
    .process(frontmatter.content)
    .then((v) => v.toString());

  // @ts-ignore
  const trueDate = new Date(slug.split("-").slice(0, 2));
  const formatDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <main className="flex flex-col sm:items-center">
      <div className="sm:w-lg">
        <span className="text-sm">{formatDate.format(trueDate)}</span>
        <h1 className="mt-0 mb-5">{data.title}</h1>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </main>
  );
}
