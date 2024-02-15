import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Blog Posts</h1>
      <div className="flex flex-col gap-2">
        {allPosts
          .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
          .map((post, n) => (
            <BlogCard post={post} key={n} />
          ))}
      </div>
    </main>
  );
}

function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={post.url}>
      <div className="rounded-md bg-secondary/20 transition-all hover:text-white shadow-md p-2">
        <p className="underline underline-offset-4">{post.title}</p>
        <time dateTime={post.date} className="text-xs">
          {format(parseISO(post.date), "LLL d, yyyy")}
        </time>
        <p>{post.desc}</p>
      </div>
    </Link>
  );
}
