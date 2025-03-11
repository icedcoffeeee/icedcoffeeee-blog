import YAML from "yaml";
import path from "path";
import { readFileSync } from "fs";

type Data = {
  projects: Project[];
};

type Project = {
  title: string;
  img: string;
  desc: string;
};

function getData(): Data {
  const datafile = path.resolve(process.cwd(), "public/data.yml");
  const contents = readFileSync(datafile, "utf8");
  return YAML.parse(contents);
}
export function getProjects() {
  return getData().projects;
}
