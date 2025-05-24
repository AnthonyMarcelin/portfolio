import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Tech from "../components/Tech";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
