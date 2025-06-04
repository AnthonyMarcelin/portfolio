import ScrollReveal from "../utils/ScrollReveal";

const CV = () => {
  return (
    <ScrollReveal>
      <div className="flex min-h-[40vh] w-full flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-light text-white md:text-6xl">Mon CV</h1>
        <a
          href="/src/data/CV.pdf"
          download
          className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-3 text-white transition-all duration-300 hover:scale-110"
        >
          Télécharger mon CV
        </a>
      </div>
    </ScrollReveal>
  );
};

export default CV;
