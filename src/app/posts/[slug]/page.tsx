import { getData } from "@/lib";
import { notFound } from "next/navigation";

import { unified } from "unified";
import parse from "remark-parse";
import math from "remark-math";
import mark2hype from "remark-rehype";
import stringify from "rehype-stringify";
import katex from "rehype-katex";

type Page = { params: Promise<{ slug: string }> };
export default async function Page({ params }: Page) {
  const { slug } = await params;
  const { posts } = getData();

  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const content = await unified()
    // remark
    .use(parse)
    .use(math)
    .use(mark2hype, { allowDangerousHtml: true })

    // rehype
    .use(katex, {
      displayMode: true,
      macros: {
        "\\vb": "\\bold",
        "\\va": "\\vec{\\bold #1}",
        "\\dd": "\\,\\mathrm{d}",
      },
    })
    .use(stringify, { allowDangerousHtml: true })

    .process(post.content)
    .then((v) => v.toString());

  return (
    <main className="flex flex-col sm:items-center">
      <div
        className="max-w-2xl w-full
        text-foreground
        prose dark:prose-invert
        prose-headings:font-mono
        prose-h1:text-2xl
        prose-h2:text-xl
        prose-h3:text-lg"
      >
        <span>{post.date}</span>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </main>
  );
}
