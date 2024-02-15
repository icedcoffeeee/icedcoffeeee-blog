import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <div className="flex flex-col gap-2 mb-4">
        {allPosts
          .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
          .slice(0, 4)
          .map((post, n) => (
            <BlogLink post={post} key={n} />
          ))}
        <Link
          href={"/blog"}
          className="flex gap-2 underline underline-offset-4 hover:text-white transition-all"
        >
          All posts <MoveRight strokeWidth={1} />
        </Link>
      </div>
    </>
  );
}

function BlogLink({ post }: { post: Post }) {
  return (
    <Link href={post.url}>
      <div className="flex justify-between gap-2 hover:text-white transition-all">
        <p className="underline underline-offset-4">{post.title}</p>
        <time dateTime={post.date} className="min-w-fit">
          {format(parseISO(post.date), "LLL d, yyyy")}
        </time>
      </div>
    </Link>
  );
}
