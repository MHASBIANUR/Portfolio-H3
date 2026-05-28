import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

/* IMAGES */
import taskora1 from "../assets/project1.jpg";
import taskora2 from "../assets/project1-2.jpg";

import medimineImg1 from "../assets/project2.jpg";
import medimineImg2 from "../assets/project2-1.jpg";

import resumatchImg from "../assets/project3.jpg";

import portfolioImg from "../assets/project4.jpg";

export default function Projects() {

  const projects = [
    {
      title: "Taskora App",

      description:
        "Task management application designed to organize daily workflows with clean and intuitive task tracking.",

      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
      ],

      github: "https://github.com/MHASBIANUR/taskora",

      demo: "https://taskora-phi.vercel.app/",

      images: [taskora1, taskora2],
    },

    {
      title: "MediMine",

      description:
        "AI-powered health assistant that analyzes symptoms and provides basic health insights in real time.",

      tech: [
        "Next.js",
        "Express.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
      ],

      github: "https://github.com/MHASBIANUR/MediMine-Frontend",

      demo: "https://medimine-frontend.vercel.app/",

      images: [medimineImg1, medimineImg2],
    },

    {
      title: "ResuMatch",

      description:
        "Telegram-integrated web platform that analyzes resumes and automatically matches job opportunities.",

      tech: [
        "Next.js",
        "Tailwind CSS",
        "Telegram API",
        "n8n",
        "Supabase",
      ],

      github: "https://github.com/MHASBIANUR/resumatch",

      demo: "https://resumatch-ivory.vercel.app/",

      images: [resumatchImg],
    },

    {
      title: "Portfolio Website",

      description:
        "Modern developer portfolio with futuristic UI, smooth animations, interactive particles, and responsive layouts.",

      tech: [
        "React",
        "Vite",
        "Framer Motion",
        "TSParticles",
      ],

      github: "",

      demo: "",

      images: [portfolioImg],
    },
  ];

  /* ================= SLIDER ================= */

  const [currentIndexes, setCurrentIndexes] = useState(
    projects.map(() => 0)
  );

  const nextImage = (projectIndex, total) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];

      updated[projectIndex] =
        updated[projectIndex] === total - 1
          ? 0
          : updated[projectIndex] + 1;

      return updated;
    });
  };

  const prevImage = (projectIndex, total) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];

      updated[projectIndex] =
        updated[projectIndex] === 0
          ? total - 1
          : updated[projectIndex] - 1;

      return updated;
    });
  };

  return (
    <section
      className="projects"
      id="projects"
    >

      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >

            {/* IMAGE */}
            <div className="project-image-wrapper">

              <img
                src={project.images[currentIndexes[index]]}
                alt={project.title}
                className="project-image"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    className="slider-btn left"
                    onClick={() =>
                      prevImage(index, project.images.length)
                    }
                  >
                    ❮
                  </button>

                  <button
                    className="slider-btn right"
                    onClick={() =>
                      nextImage(index, project.images.length)
                    }
                  >
                    ❯
                  </button>
                </>
              )}

            </div>

            {/* CONTENT */}
            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">

                {project.tech.map((item, i) => (
                  <span key={i}>
                    {item}
                  </span>
                ))}

              </div>

              <div className="project-links">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}