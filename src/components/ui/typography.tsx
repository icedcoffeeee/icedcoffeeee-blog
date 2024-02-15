import { PropsWithChildren } from "react";

export function B({ children }: PropsWithChildren<{}>) {
  return <span className="text-white">{children}</span>;
}
