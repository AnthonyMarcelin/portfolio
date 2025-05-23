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

const techs: { icon: IconType; color: string }[] = [
  { icon: BiLogoHtml5, color: "text-orange-500" },
  { icon: BiLogoCss3, color: "text-sky-500" },
  { icon: BiLogoTailwindCss, color: "text-sky-400" },
  { icon: BiLogoJavascript, color: "text-yellow-500" },
  { icon: BiLogoTypescript, color: "text-sky-500" },
  { icon: BiLogoNodejs, color: "text-green-400" },
  { icon: BiLogoPostgresql, color: "text-sky-500" },
  { icon: BiLogoMongodb, color: "text-green-500" },
  { icon: BiLogoGraphql, color: "text-pink-500" },
  { icon: BiLogoReact, color: "text-sky-500" },
  { icon: BiLogoDocker, color: "text-blue-600" },
  { icon: BiLogoGit, color: "text-red-500" },
];

export default techs;
