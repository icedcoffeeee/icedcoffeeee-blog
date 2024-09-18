import type { MDXComponents } from "mdx/types";

import Image, { ImageProps } from "next/image";
import AppendingLink from "./components/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => <Image {...(props as ImageProps)} />,
    a: (props) => <AppendingLink {...props} />,
    ...components,
  };
}
