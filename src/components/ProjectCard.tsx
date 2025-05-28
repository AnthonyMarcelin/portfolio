import { BsLink } from "react-icons/bs";
import type { IProject } from "../@types";
import ScrollReveal from "../utils/ScrollReveal";

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <ScrollReveal>
      <div className="flex h-full flex-col gap-4 p-4">
        <a
          href={project.link}
          target="blank"
          className="block w-full overflow-hidden rounded-2xl"
        >
          <img
            src={project.image}
            alt={project.alt}
            className="aspect-square w-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
          />
        </a>
        <div className="flex flex-col gap-4 h-full">
          <div className="flex flex-col text-white gap-2">
            <a href={project.link} target="blank">
              <div className="text-xl font-semibold">{project.title}</div>
            </a>
            <div className="flex flex-row text-white gap-2 items-center">
              <p>Go :</p>
              <a href={project.link} target="blank" className="w-fit">
                <BsLink className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-indigo-500" />
              </a>
            </div>
            <p className="text-gray-400 line-clamp-3">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techno.map((tech, index) => (
              <span
                key={index}
                className="rounded-lg bg-black text-white p-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

interface ProjectCardProps {
  project: IProject;
}
