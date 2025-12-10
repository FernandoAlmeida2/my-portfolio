"use client";

import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={project.image}
          alt={`${project.title} image`}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
          {project.title}
        </h3>

        <div className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p className={expanded ? "" : "line-clamp-3"}>
            {project.description}
          </p>

          {/* Toggle */}
          {project.description.length > 120 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 text-xs font-medium"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techs.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        {project.link ? (
          <Link
            href={project.link}
            className="bg-[#3A411B] text-white px-4 py-2 rounded-lg hover:bg-[#292d14] transition"
          >
            View Project
          </Link>
        ) : (
          <div className="opacity-0 pointer-events-none px-4 py-2">
            Placeholder
          </div>
        )}
      </div>
    </div>
  );
}
