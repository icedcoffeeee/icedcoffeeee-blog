import { Container } from "@/components/container";
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
