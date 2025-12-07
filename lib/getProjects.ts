import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project } from "@/types/project";

const projectsDir = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(projectsDir);

  return files.map((file) => {
    const filePath = path.join(projectsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    return {
      slug: file.replace(".md", ""),
      body: content,
      ...data,
    } as Project;
  });
}

export function getProjectBySlug(slug: string): Project {
  const filePath = path.join(projectsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    slug,
    body: content,
    ...data,
  } as Project;
}
