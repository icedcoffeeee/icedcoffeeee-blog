import YAML from "yaml";
import path from "path";
import { readFileSync } from "fs";

type Project = {
  title: string;
  img: string;
  desc: string;
};

export function getProjects(): Project[] {
  const datafile = path.resolve(process.cwd(), "public/projects.yml");
  const contents = readFileSync(datafile, "utf8");
  return YAML.parse(contents);
}
