import Link from "next/link";
import React from "react";

export default async function Page({
  params: { slug },
}: {
  params: { slug?: string[] };
}) {
  return <>{["home"].concat(slug ?? []).map((s) => slugToContainer(s))}</>;
}

async function slugToContainer(slug: string) {
  const content = (await import("@/app/markdown/" + slug + ".mdx")).default({});
  const title: string =
    content.props.children.find((v: React.JSX.Element) => v.type === "h1")
      ?.props.children ?? (slug === "home" ? "Home" : "Untitled");

  return (
    <Container title={title} slug={slug}>
      {content}
    </Container>
  );
}

export function Container({
  title,
  slug,
  children,
}: {
  title: string;
  slug: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Link
        href={slug === "home" ? "/" : "/" + slug}
        className="w-full border-y flex justify-center text-neutral-500
        sm:[writing-mode:vertical-lr] sm:w-fit sm:h-screen sm:border-y-0 sm:border-x sm:rotate-180 sm:left-0 capitalize"
      >
        {title}
      </Link>
      <div
        className="max-w-sm sm:min-w-[24rem] p-4 prose prose-neutral pb-16
        sm:h-screen sm:overflow-y-auto
        prose-ul:list-none prose-ul:mt-0 prose-li:my-0 prose-a:no-underline prose-a:text-cyan-700 prose-a:font-normal prose-p:my-2 leading-normal"
      >
        {children}
      </div>
    </>
  );
}
