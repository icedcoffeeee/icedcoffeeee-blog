import Link from "next/link";

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
