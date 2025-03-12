import YAML from "yaml";
import path from "path";
import { readFileSync } from "fs";

export function fp(fp: string) {
  return path.resolve(process.cwd(), "src/" + fp);
}

export type Project = { title: string; img: string; desc: string };
export function getProjects(): Project[] {
  const contents = readFileSync(fp("lib/projects.yml"), "utf8");
  return YAML.parse(contents);
}

export type Shaders = { vertex: string; fragment: string };
export function getShaders(): Shaders {
  const vertex = readFileSync(fp("shaders/vert.glsl"), "utf8");
  const fragment = readFileSync(fp("shaders/frag.glsl"), "utf8");
  return { vertex, fragment };
}
