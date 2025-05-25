import profil from "/images/profil_pro.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={profil}
            alt="photo de profil"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl"
          >
            Anthony Marcelin
          </motion.h1>
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl"
          >
            Développeur web fullstack
          </motion.h3>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="md:text-base text-pretty text-sm text-gray-400"
          >
            Bonjour ! Je m'appelle Anthony, et je suis développeur web
            full-stack en reconversion. Après plusieurs années dans le
            transport, j’ai décidé de me lancer dans une carrière qui me
            passionne : le développement web. Aujourd’hui, je conçois et
            développe des applications web modernes, à la fois côté front-end et
            back-end. Curieux, rigoureux et autonome, j’aime comprendre comment
            les choses fonctionnent et trouver des solutions concrètes à des
            problèmes réels.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
