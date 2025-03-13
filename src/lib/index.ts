import YAML from "yaml";
import path from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";

export function fp(fp: string) {
  return path.resolve(process.cwd(), "src/" + fp);
}

export type Project = { title: string; img: string; desc: string };
export type Shaders = { vertex: string; fragment: string };
export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
};

export type Data = {
  projects: Project[];
  shaders: Shaders;
  posts: Post[];
};

export function getData(): Data {
  const projects = readFileSync(fp("lib/projects.yml"), "utf8");

  const vertex = readFileSync(fp("shaders/vert.glsl"), "utf8");
  const fragment = readFileSync(fp("shaders/frag.glsl"), "utf8");

  let posts = [];
  const dateF = Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  });
  for (let dir of readdirSync(fp("posts/"))) {
    if (dir === "empty") continue;
    const frontmatter = matter(readFileSync(fp("posts/" + dir), "utf8"));
    posts.push({
      ...frontmatter.data,
      slug: dir.split(".")[0],
      date: dateF.format(new Date(dir.split("-").slice(0, 2).join("-"))),
      content: frontmatter.content,
    } as Post);
  }

  return {
    projects: YAML.parse(projects),
    shaders: { vertex, fragment },
    posts,
  };
}
