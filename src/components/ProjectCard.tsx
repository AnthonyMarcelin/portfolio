import { BsLink } from "react-icons/bs";
import type { IProject } from "../@types";
import ScrollReveal from "../utils/ScrollReveal";

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <a
          href={project.link}
          target="blank"
          className="block w-full md:w-[300px] flex-shrink-0"
        >
          <img
            src={project.image}
            alt={project.alt}
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105"
          />
        </a>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <a href={project.link} target="blank">
              <div className="text-xl font-semibold">{project.title}</div>
            </a>
            <div className="flex flex-row gap-2">
              <p>Go :</p>
              <a href={project.link} target="blank" className="w-fit">
                <BsLink className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-indigo-500" />
              </a>
            </div>
            {project.title === "A ta soif !" && (
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-row gap-2">
                  <p>Go :</p>
                  <a
                    href="https://www.atasoif.fr"
                    target="blank"
                    className="w-fit"
                  >
                    A ta soif !
                  </a>
                </div>
              </div>
            )}
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.techno.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
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
