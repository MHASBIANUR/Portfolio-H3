import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Contact() {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mnf10q9",
        "template_2r8ehpq",
        formRef.current,
        "FB-5S7crH1mLBAFSs"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message!");
          console.log(error);
        }
      );
  };

  return (
    <section className="contact">

      {/* LEFT */}
      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >

        <h2>Contact Me</h2>

        <p>
          Feel free to reach out for collaboration,
          freelance projects, or simply a friendly discussion
          about development and technology.
        </p>

        <div className="contact-info">

          <div className="contact-item">
            <MdEmail />
            <span>
              hasbianur16@gmail.com
            </span>
          </div>

          <div className="contact-item">
            <FaWhatsapp />
            <span>
              +62 823-5323-6845
            </span>
          </div>

        </div>

        <div className="contact-social">

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
      </motion.div>

      {/* RIGHT */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </motion.form>

    </section>
  );
}