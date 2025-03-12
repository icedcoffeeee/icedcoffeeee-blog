import Image from "next/image";
import { ChevronDown } from "lucide-react";
//import { Orbital } from "@/components/orbital";
import { WormHole } from "@/components/wormhole";
//import { getShaders } from "@/lib";
import { getProjects, type Project } from "@/lib";

export default function Page() {
  const projects = getProjects();
  //const shaders = getShaders();
  return (
    <main>
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
          &mdash; A. Moore
        </blockquote>
        <ChevronDown className="absolute bottom-4 animate-bounce"></ChevronDown>
      </section>

      {
        //<section className="relative -m-4 min-h-svh w-svw flex justify-center items-center">
        //<div className="relative size-30 rounded-full overflow-clip shadow z-10">
        //<Image src="/images/me.jpg" alt="me" fill></Image>
        //</div>
        //<Orbital shaders={shaders}></Orbital>
        //</section>
      }

      <h1>My Projects</h1>
      <section className="my-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <Project key={i} project={p}></Project>
        ))}
      </section>
    </main>
  );
}

function Project({ project }: { project: Project }) {
  return (
    <div className="p-4 bg-foreground/10 backdrop-blur rounded shadow flex gap-4 transition-all hover:scale-110 hover:z-10 hover:rotate-[1deg]">
      <div className="w-full flex flex-col justify-between">
        <p className="font-bold">{project.title}</p>
        <p className="line-clamp-2">{project.desc}</p>
      </div>
      {!!project.img && (
        <div
          className="aspect-square h-full bg-contain rounded overflow-clip"
          style={{ position: "relative" }}
        >
          <Image
            src={"/images/" + project.img}
            alt={project.img.split(".")[0]}
            fill
            className={
              "shadow object-cover" +
              (project.img.split(".")[1] === "svg" && " scale-50")
            }
          ></Image>
        </div>
      )}
    </div>
  );
}
