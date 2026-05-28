import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-line"></div>

      <div className="footer-content">

        <div className="footer-left">
          <h3>M. Hasbianur</h3>

          <p>
            Full Stack Developer • Backend / Frontend
          </p>
        </div>

        <div className="footer-social">

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

        <button
          className="back-top"
          onClick={backToTop}
        >
          <FaArrowUp />
        </button>

      </div>

      <p className="footer-copy">
        © 2026 M. Hasbianur — Crafted with React, Framer Motion & Passion.
      </p>

    </footer>
  );
}