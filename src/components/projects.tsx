import Link from "next/link";

export function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
        <ProjectCard title="tehais" link="https://youtube.com/@teh_ais">
          YouTube channel on mathematics
        </ProjectCard>
        <ProjectCard title="lectcheck" link="https://lectcheck.vercel.app">
          Open platform for reviewing lecturers.
        </ProjectCard>
        <ProjectCard
          title="comp_phy"
          link="https://github.com/icedcoffeeee/comp_phy"
        >
          Code for computational physics problems.
        </ProjectCard>
        <ProjectCard title="perfum-2023" link="https://perfum-2023.vercel.app">
          Static site for the Physics Club 2023 Election.
        </ProjectCard>
      </div>
    </>
  );
}

function ProjectCard({
  title,
  link,
  children,
}: {
  title: string;
  link: string;
  children: string;
}) {
  return (
    <div className="leading-none bg-zinc-800 p-2 rounded shadow-md hover:bg-zinc-700 transition-all">
      <Link href={link} target="_blank">
        <p className="underline underline-offset-4 mb-3 text-white">{title}</p>
        <p>{children}</p>
      </Link>
    </div>
  );
}
