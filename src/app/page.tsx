import Image from "next/image";
import { WormHole } from "./wormhole";
import { getProjects } from "@/lib";

export default function Page() {
  const projects = getProjects();
  return (
    <main className="min-h-[200svh]">
      <section className="-m-4 p-4 h-[calc(100svh-15*var(--spacing))] flex flex-col justify-between items-center">
        <div className="self-start">
          <h1 className="m-0 text-4xl font-mono">Hazim Saharuddin</h1>
          <p>Physicist, Developer, Educator</p>
        </div>
        <WormHole></WormHole>
        <blockquote className="italic text-right self-end max-w-lg">
          There are two worlds we live in: a material world, bound by the laws
          of physics, and the world inside our mind, which is just as important.
          <br />
          &mdash; A. Einstein
        </blockquote>
      </section>

      <h1>My Projects</h1>
      <section className="my-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-4 bg-foreground/10 backdrop-blur rounded shadow flex gap-4"
          >
            <div className="w-full flex flex-col justify-between">
              <p className="font-bold">{p.title}</p>
              <p className="line-clamp-2">{p.desc}</p>
            </div>
            {!!p.img && (
              <div
                className="aspect-square h-full bg-contain rounded overflow-clip"
                style={{ position: "relative" }}
              >
                <Image
                  src={p.img}
                  alt={p.img.split("/").at(-1) ?? ""}
                  fill
                  className="shadow object-cover"
                ></Image>
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
