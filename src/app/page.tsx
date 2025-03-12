import Image from "next/image";
import { WormHole } from "@/components/wormhole";
import { getProjects, getShaders, Project } from "@/lib";
import { ChevronDown } from "lucide-react";
import { Orbital } from "@/components/orbital";

export default function Page() {
  const projects = getProjects();
  const shaders = getShaders();
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

      <section className="relative -m-4 min-h-[50svh] w-svw flex justify-center items-center">
        {
          //<div className="relative size-30 rounded-full overflow-clip shadow">
          //<Image src="/images/me.jpg" alt="me" fill></Image>
          //</div>
        }
        <Orbital shaders={shaders}></Orbital>
      </section>

      <h1>My Projects</h1>
      <Projects projects={projects}></Projects>
    </main>
  );
}

function Projects({ projects }: { projects: Project[] }) {
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
                className={
                  "shadow object-cover" +
                  (p.img.split(".")[1] === "svg" && " scale-50")
                }
              ></Image>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
