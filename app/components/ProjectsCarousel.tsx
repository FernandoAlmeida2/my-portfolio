"use client";

import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

type Props = {
    projects: Project[];
};

export default function ProjectsCarousel({ projects }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 380; // largura real do card + gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-neutral-900/80 text-white p-3 
        rounded-full shadow-lg hover:bg-neutral-900 hover:scale-110 transition-all duration-200 hidden md:block"
      >
        ◀
      </button>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-none py-4 scroll-smooth w-full snap-x snap-mandatory"
      >
        {projects.map((project) => (
          <div 
            key={project.slug} 
            className="shrink-0 transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-neutral-900/80 text-white p-3 
        rounded-full shadow-lg hover:bg-neutral-900 hover:scale-110 transition-all duration-200 hidden md:block"
      >
        ▶
      </button>

    </div>
  );
}
