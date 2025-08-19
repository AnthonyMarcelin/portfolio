import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Anthony Marcelin
      </a>
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Accueil
        </a>

        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Compétences
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Projets
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Contact
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <a href="https://github.com/AnthonyMarcelin" target="blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
            <BsGithub />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/anthony-marcelin" target="blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsLinkedin />
          </li>
        </a>
        <a href="/docs/CV.pdf" download>
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:opacity-100 flex items-center">
            <BsDownload />
            <span className="text-sm ml-1">CV</span>
          </li>
        </a>
      </ul>

      <button onClick={menuOpen} aria-label="Toggle menu">
        {isOpen ? (
          <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
        ) : (
          <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
        )}
      </button>

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              onClick={handleClick}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Accueil
            </a>

            <a
              href="#tech"
              onClick={handleClick}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Compétences
            </a>

            <a
              href="#projects"
              onClick={handleClick}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Projets
            </a>

            <a
              href="#contact"
              onClick={handleClick}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Contact
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <a
              href="https://github.com/AnthonyMarcelin"
              onClick={handleClick}
              target="blank"
            >
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                <BsGithub />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-marcelin"
              onClick={handleClick}
              target="blank"
            >
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                <BsLinkedin />
              </li>
            </a>
            <a href="/docs/CV.pdf" download>
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:opacity-100 flex items-center">
                <BsDownload />
                <span className="text-sm ml-1">CV</span>
              </li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
