import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function Hero({ setPage }) {
  return (
    <section className="hero">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hero-left"
      >

        <h1 className="hero-hello">
          Hello!
        </h1>

        <h1 className="hero-name">
          I AM M. HASBIANUR
        </h1>

        <p className="hero-role">
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer || Backend",
              1000,
              "JavaScript . PHP || React.js . Next.js",
              1000,
            ]}
            speed={10}
            repeat={Infinity}
          />
        </p>

        {/* MOBILE FOTO */}
        <div className="hero-mobile-profile">

          <img
            src="/foto.png"
            alt="profile"
          />

          <div className="hero-social">

            <a
              href="https://github.com/MHASBIANUR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/m-hasbianur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/6282353236845"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/hasbii.nur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

        {/* BUTTON */}
        <div className="hero-buttons">

          <button
            className="outline-btn"
            onClick={() => setPage("about")}
          >
            About Me
          </button>

          <button
            className="outline-btn"
            onClick={() => setPage("projects")}
          >
            Projects
          </button>

          <button
            className="outline-btn"
            onClick={() => setPage("contact")}
          >
            Contact
          </button>

        </div>
      </motion.div>

      {/* RIGHT DESKTOP */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hero-right"
      >

        <div className="hero-profile">

          <img
            src="/foto.png"
            alt="profile"
          />

          <div className="hero-social">

            <a
              href="https://github.com/MHASBIANUR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/m-hasbianur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/6282353236845"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/hasbii.nur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

          </div>
        </div>
      </motion.div>
    </section>
  );
}