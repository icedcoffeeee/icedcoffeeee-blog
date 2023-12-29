import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import NextImage from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { post: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.post);
  if (!post) notFound();

  const Component = useMDXComponent(post.body.code);

  return (
    <article className="prose prose-invert mb-4">
      <div>
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Component components={{ Image, a }} />
    </article>
  );
}

function Image({ src, desc }: { src: string; desc?: string }) {
  return (
    <div className="w-full flex justify-center my-3">
      <div className="flex flex-col items-center gap-2">
        <NextImage
          src={"/" + src}
          alt={src.split(".")[0]}
          width={200}
          height={200}
          className="rounded-md"
        />
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

function a({ href, children }: any) {
  return (
    <Link href={href} target={href.startsWith("/") ? "_self" : "_blank"}>
      {children}
    </Link>
  );
}
