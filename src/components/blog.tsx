import Link from "next/link";

export function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <div className="flex flex-col gap-2">
        <BlogLink title="" link="" />
      </div>
    </>
  );
}

function BlogLink({ title, link }: { title: string; link: string }) {
  return (
    <Link href={link} target="_blank">
      {title}
    </Link>
  );
}
