import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Tech from "../components/Tech";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
      <Contact />
    </>
  );
}

export default Homepage;
