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
      ?.props.children ?? "Untitled";

  return <Container title={title}>{content}</Container>;
}

export function Container({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        id={title.replace(/\s/g, "-").toLowerCase()}
        className="w-full border-y opacity-80 flex justify-center
        sm:[writing-mode:vertical-lr] sm:w-fit sm:h-screen sm:border-y-0 sm:border-x sm:rotate-180 capitalize"
      >
        {title}
      </div>
      <div
        className="max-w-sm sm:min-w-[24rem] m-4 prose prose-neutral
        prose-ul:list-none prose-ul:mt-0 prose-li:my-0 prose-a:no-underline prose-a:text-cyan-700 prose-a:font-normal prose-p:my-2 leading-normal"
      >
        {children}
      </div>
    </>
  );
}
