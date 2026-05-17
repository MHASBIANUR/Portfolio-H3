import { motion } from "framer-motion";

import {
  SiExpress,
  SiPhp,
  SiNodedotjs,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiGit,
} from "react-icons/si";

export default function About() {

  /* ===== ICON LIST ===== */

  const iconsLeft = (
    <>
      <SiExpress color="#ffffff" />
      <SiPhp color="#777BB4" />
      <SiNodedotjs color="#339933" />
      <SiLaravel color="#FF2D20" />
      <SiHtml5 color="#E34F26" />
      <SiCss3 color="#1572B6" />
      <SiJavascript color="#F7DF1E" />
      <SiTypescript color="#3178C6" />
    </>
  );

  const iconsRight = (
    <>
      <SiReact color="#61DAFB" />
      <SiNextdotjs color="#ffffff" />
      <SiTailwindcss color="#38BDF8" />
      <SiMysql color="#4479A1" />
      <SiPostgresql color="#336791" />
      <SiGit color="#F05032" />
    </>
  );

  return (
    <section className="about">

      {/* LEFT */}
      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>

        <p>
          Hi, I’m <span className="highlight">M. Hasbianur</span> — a Full Stack
          Developer passionate about building scalable and high-performance
          web applications.
        </p>

        <p>
          I specialize in modern JavaScript and PHP ecosystems, building clean
          and maintainable systems using React.js, Next.js, Node.js, Laravel,
          and relational databases.
        </p>

        <p>
          My focus is creating reliable, scalable, and impactful digital
          solutions with clean architecture and responsive user experiences.
        </p>

        <a
          href="/CV.pdf"
          download
          className="cv-btn"
        >
          Download CV
        </a>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Tech Stack</h3>

        <div className="tech-horizontal">

          {/* TOP ROW */}
          <div className="row">
            <div className="row-track left">
              {iconsLeft}
              {iconsLeft}
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="row">
            <div className="row-track right">
              {iconsRight}
              {iconsRight}
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
}