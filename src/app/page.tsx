import Image from "next/image";
import { ChevronDown } from "lucide-react";
//import { Orbital } from "@/components/orbital";
import { WormHole } from "@/components/wormhole";
import { getData, type Project } from "@/lib";
import Link from "next/link";

export default function Page() {
  const { projects, posts } = getData();
  return (
    <main>
      <section className="-m-4 p-4 h-[calc(100svh-15*var(--spacing))] flex flex-col justify-between items-center">
        <div className="self-start">
          <h1 className="m-0 text-4xl font-mono font-bold">Hazim Saharuddin</h1>
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
        //<Image src="/images/me.jpg" alt="me" fill style={{ objectFit: "cover" }}></Image>
        //</div>
        //<Orbital shaders={shaders}></Orbital>
        //</section>
      }

      <div className="lg:grid lg:grid-cols-2 gap-8">
        <div>
          <h1>Projects</h1>
          <section className="my-5 grid gap-4 md:grid-cols-2">
            {projects.map((p, i) => (
              <Project key={i} project={p}></Project>
            ))}
          </section>
        </div>

        <div>
          <h1>Posts</h1>
          <section className="overflow-x-scroll w-full min-h-60 md:h-full">
            <div className="my-5 mx-2 md:mx-0">
              <div
                data-has-post={!!posts.length}
                className="posts grid
                data-[has-post=true]:grid-cols-[80%_repeat(2,max-content)]
                data-[has-post=false]:grid-cols-[1fr_repeat(2,max-content)]
                md:data-[has-post=true]:grid-cols-[1fr_repeat(2,max-content)]"
              >
                <div className="contents font-bold">
                  <div>Title</div>
                  <div>Date</div>
                  <div>Tags</div>
                </div>
                {!posts.length ? (
                  <>
                    <div className="text-foreground/50">None Yet</div>
                    <div></div>
                    <div></div>
                  </>
                ) : (
                  posts.map((p, i) => {
                    return (
                      <Link
                        key={i}
                        href={"posts/" + p.slug}
                        className="contents"
                      >
                        <div className="line-clamp-2">{p.title}</div>
                        <div>{p.date}</div>
                        <div className="font-mono">{p.tags}</div>
                      </Link>
                    );
                  })
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
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
          className="aspect-square h-full rounded overflow-clip"
          style={{
            position: "relative",
            filter: "drop-shadow(var(--drop-shadow-md))",
          }}
        >
          <Image
            src={"/images/" + project.img}
            alt={project.img.split(".")[0]}
            fill
            style={{
              objectFit: "cover",
              scale: project.img.split(".")[1] === "svg" ? 0.5 : 1,
            }}
          ></Image>
        </div>
      )}
    </div>
  );
}
