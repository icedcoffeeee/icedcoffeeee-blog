import { WormHoleDisplay } from "./wormhole";

export default function Page() {
  return (
    <main className="min-h-[200svh]">
      <section className="-m-4 p-4 h-svh flex flex-col justify-end items-center">
        <WormHoleDisplay></WormHoleDisplay>
        <blockquote className="italic text-center max-w-lg">
          There are two worlds we live in: a material world, bound by the laws
          of physics, and the world inside our mind, which is just as important.
        </blockquote>
      </section>
      <section className="-m-4 p-4 h-svh flex flex-col justify-center items-center">
        <p>Hi! My name is</p>
        <h1 className="text-4xl">Hazim Saharuddin</h1>
      </section>
    </main>
  );
}
