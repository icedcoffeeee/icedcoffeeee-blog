import * as React from "react";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: any) {
  return (
    <div className="w-full flex flex-col items-center">
      <img alt={props.alt} {...props} className="rounded-xl" />
      <span>{props.alt}</span>
    </div>
  );
}

function Callout(props: any) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex self-start w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function HighLight(props: any) {
  return (
    <span className="bg-yellow-500 bg-opacity-20 rounded-sm p-1 underline decoration-yellow-500 decoration-2 underline-offset-4">
      {props.children}
    </span>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  HL: HighLight,
  Callout,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-invert prose-strong:text-yellow-500 prose-em:text-pink-500">
      <Component components={components} />
    </article>
  );
}
