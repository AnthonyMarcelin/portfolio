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
} from "react-icons/bi";

const techs: { icon: IconType; color: string; desc: string }[] = [
  { icon: BiLogoHtml5, color: "text-orange-500", desc: "HTML5" },
  { icon: BiLogoCss3, color: "text-sky-500", desc: "CSS3" },
  { icon: BiLogoTailwindCss, color: "text-sky-400", desc: "TailwindCSS" },
  { icon: BiLogoJavascript, color: "text-yellow-500", desc: "JavaScript" },
  { icon: BiLogoTypescript, color: "text-sky-500", desc: "TypeScript" },
  { icon: BiLogoNodejs, color: "text-green-400", desc: "NodeJS" },
  { icon: BiLogoPostgresql, color: "text-sky-500", desc: "PostgreSQL" },
  { icon: BiLogoMongodb, color: "text-green-500", desc: "MongoDB" },
  { icon: BiLogoGraphql, color: "text-pink-500", desc: "GraphQL" },
  { icon: BiLogoReact, color: "text-sky-500", desc: "React" },
  { icon: BiLogoDocker, color: "text-blue-600", desc: "Docker" },
  { icon: BiLogoGit, color: "text-red-500", desc: "Git" },
];

export default techs;
