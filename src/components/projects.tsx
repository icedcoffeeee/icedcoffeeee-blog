import Link from "next/link";
import { Circle } from "lucide-react";

type Project = {
  title: string;
  link: string;
  desc: string;
  points?: string[];
};

type Annual = {
  year: number;
  items: Project[];
};

const projects: Annual[] = [
  {
    year: 2024,
    items: [
      {
        title: "lectcheck",
        link: "https://lectcheck.vercel.app",
        desc: "Open platform for reviewing lecturers",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        title: "comp_phy",
        link: "https://github.com/icedcoffeeee/comp_phy",
        desc: "Code for computational physics problems",
        points: [
          "Neural networks",
          "TD Schrodinger solvers",
          "Particle simulations",
        ],
      },
      {
        title: "perfum-2023",
        link: "https://perfum-2023.vercel.app",
        desc: "Static site for the Physics Club 2023 Election",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        title: "tehais",
        link: "https://youtube.com/@teh_ais",
        desc: "YouTube channel on mathematics (in continuous effort)",
      },
    ],
  },
];

export function Projects() {
  return (
    <>
      <h1>Projects</h1>
      {projects.map((project, i) => (
        <ProjectTimelineAnnum annual={project} key={i} />
      ))}
    </>
  );
}

function ProjectTimelineAnnum({ annual }: { annual: Annual }) {
  return (
    <div className="flex md:pl-14">
      <span className="text-white font-mono">{annual.year}</span>
      <div className="flex flex-col">
        {annual.items.map((project, i) => (
          <ProjectTimelineUnit project={project} key={i} />
        ))}
      </div>
    </div>
  );
}

function ProjectTimelineUnit({ project }: { project: Project }) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <Circle className="mx-2 w-3 aspect-square" />
        <span className="w-[0.5px] bg-white grow" />
      </div>
      <Link className="flex flex-col mb-3" href={project.link} target="_blank">
        <span className="text-white font-mono underline underline-offset-4">
          {project.title}
        </span>
        <p>{project.desc}</p>
        {project.points && (
          <ul className="list-disc pl-4">
            {project.points.map((v, i) => (
              <li className="" key={i}>
                {v}
              </li>
            ))}
          </ul>
        )}
      </Link>
    </div>
  );
}
