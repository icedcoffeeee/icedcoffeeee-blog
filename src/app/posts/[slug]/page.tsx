import { getData } from "@/lib";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { unified } from "unified";

import gfm from "remark-gfm";
import mark2hype from "remark-rehype";
import math from "remark-math";
import parse from "remark-parse";

import katex from "rehype-katex";
import stringify from "rehype-stringify";

type Page = { params: Promise<{ slug: string }> };
export default async function Page({ params }: Page) {
  const { slug } = await params;
  const { posts } = getData();

  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const content = await unified()
    // remark
    .use(parse)
    .use(gfm)
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
        prose-h3:text-lg
        prose-li:-mb-5
        prose-p:text-justify
        prose-p:relative
        prose-img:w-full
        sm:prose-img:w-1/2
        sm:prose-img:translate-x-1/2
        "
      >
        <div>{post.date}</div>
        <h1>{post.title}</h1>
        <div className="flex gap-2 mb-5">
          {post.tags?.map((t, i) => (
            <div key={i} className="text-sm font-mono px-1 bg-blue-900 rounded">
              {t}
            </div>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: Page): Promise<Metadata> {
  const { slug } = await params;
  const { posts } = getData();

  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();
  return {
    title: post.title + " | icedcoffeeee",
    description: "icedcoffeeee's rants",
  };
}
