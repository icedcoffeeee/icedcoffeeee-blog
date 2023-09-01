import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "app/components/mdx";
import { allBlogs } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";
import "katex/dist/katex.min.css";
import { DateComponent } from "../formatdate";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    slug,
  } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://icedcoffeeee.vercel.app/blog/${slug}`,
    },
  };
}

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      ></script>
      <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <DateComponent date={post.publishedAt} />
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
}
