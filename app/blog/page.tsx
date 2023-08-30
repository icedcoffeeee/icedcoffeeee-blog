import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts or Interests about Physics, Software, and anything else.",
};

export function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">read my blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight mb-0">
                {post.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-0">
                {formatDate(post.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
