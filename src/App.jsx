import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import ParticlesBg from "./components/ParticlesBg";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <ParticlesBg />

      {page !== "home" && <Navbar setPage={setPage} />}

      {page === "home" && <Hero setPage={setPage} />}

      {page === "about" && <About />}

      {page === "projects" && <Projects />}

      {page === "contact" && <Contact />}
    </>
  );
}

export default App;