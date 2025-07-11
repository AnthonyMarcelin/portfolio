import { motion } from "framer-motion";
import techs from "../data/techs";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Compétences
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-1 p-5">
        {techs.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: index * 0.27,
              }}
              className="group flex cursor-pointer flex-col items-center gap-2  duration-500 ease-out hover:-translate-y-5"
            >
              <Icon
                className={`text-[80px] ${tech.color} sm:text-[100px] md:text-[120px]`}
              />
              <span className="text-center text-white text-sm font-light">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
