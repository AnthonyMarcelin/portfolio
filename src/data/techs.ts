import type { IconType } from "react-icons";
import {
  BiLogoCss3,
  BiLogoDocker,
  BiLogoGit,
  BiLogoGraphql,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoAngular,
} from "react-icons/bi";

const techs: { icon: IconType; color: string; name: string }[] = [
  { icon: BiLogoHtml5, color: "text-orange-500", name: "HTML5" },
  { icon: BiLogoCss3, color: "text-sky-500", name: "CSS3" },
  { icon: BiLogoTailwindCss, color: "text-sky-400", name: "TailwindCSS" },
  { icon: BiLogoJavascript, color: "text-yellow-500", name: "JavaScript" },
  { icon: BiLogoTypescript, color: "text-sky-500", name: "TypeScript" },
  { icon: BiLogoNodejs, color: "text-green-400", name: "NodeJS" },
  { icon: BiLogoPostgresql, color: "text-sky-500", name: "PostgreSQL" },
  { icon: BiLogoMongodb, color: "text-green-500", name: "MongoDB" },
  { icon: BiLogoGraphql, color: "text-pink-500", name: "GraphQL" },
  { icon: BiLogoReact, color: "text-sky-500", name: "React" },
  { icon: BiLogoAngular, color: "text-red-600", name: "Angular" },
  { icon: BiLogoDocker, color: "text-blue-600", name: "Docker" },
  { icon: BiLogoGit, color: "text-red-500", name: "Git" },
];

export default techs;
