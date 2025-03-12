import Image from "next/image";
import { WormHole } from "./wormhole";
import { getProjects } from "@/lib";
import { ChevronDown } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-[200svh]">
      <section className="-m-4 p-4 h-[calc(100svh-15*var(--spacing))] flex flex-col justify-between items-center">
        <div className="self-start">
          <h1 className="m-0 text-4xl font-mono">Hazim Saharuddin</h1>
          <p>Physicist, Developer, Educator</p>
        </div>
        <WormHole></WormHole>
        <blockquote className="italic text-right self-end max-w-lg mb-10">
          There are two worlds we live in: a material world, bound by the laws
          of physics, and the world inside our mind, which is just as important.
          <br />
          &mdash; A. Einstein
        </blockquote>
        <ChevronDown className="absolute bottom-4 animate-bounce"></ChevronDown>
      </section>

      <h1>My Projects</h1>
      <Projects></Projects>
    </main>
  );
}

function Projects() {
  const projects = getProjects();
  return (
    <section className="my-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {projects.map((p, i) => (
        <div
          key={i}
          className="p-4 bg-foreground/10 backdrop-blur rounded shadow flex gap-4 transition-all hover:scale-110 hover:z-10 hover:rotate-[1deg]"
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
                src={"/images/" + p.img}
                alt={p.img.split(".")[0]}
                fill
                className="shadow object-cover"
              ></Image>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
