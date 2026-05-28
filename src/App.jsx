import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ParticlesBg from "./components/ParticlesBg";

function App() {
  return (
    <>
      <ParticlesBg />

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}

export default App;