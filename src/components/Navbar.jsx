import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [active, setActive] = useState("home");

  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (id) => {

    const section = document.getElementById(id);

    const yOffset = -20;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  /* ================= ACTIVE SECTION ================= */

  useEffect(() => {

    const sections = [
      "home",
      "about",
      "projects",
      "contact",
    ];

    const handleActive = () => {

      /* SHOW MENU AFTER HERO */

      if (window.scrollY > 120) {

        setShowMenu(true);

      } else {

        setShowMenu(false);

        /* AUTO CLOSE SIDEBAR WHEN BACK TO HERO */
        setOpen(false);
      }

      /* ACTIVE SECTION */

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {

        const element =
          document.getElementById(section);

        if (!element) return;

        const sectionTop = element.offsetTop;

        const sectionBottom =
          sectionTop + element.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          setActive(section);
        }

      });

    };

    window.addEventListener("scroll", handleActive);

    /* RUN FIRST TIME */
    handleActive();

    return () => {
      window.removeEventListener(
        "scroll",
        handleActive
      );
    };

  }, []);

  return (
    <>
      {/* HAMBURGER */}
      <AnimatePresence>

        {showMenu && (

          <motion.div
            className={`menu-btn ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            ☰
          </motion.div>

        )}

      </AnimatePresence>

      <AnimatePresence>

        {open && (
          <>

            {/* OVERLAY */}
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.nav
              className="sidebar"
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ duration: 0.35 }}
            >

              <ul>

                <li
                  className={
                    active === "home"
                      ? "active-link"
                      : ""
                  }
                  onClick={() => handleScroll("home")}
                >
                  Home
                </li>

                <li
                  className={
                    active === "about"
                      ? "active-link"
                      : ""
                  }
                  onClick={() => handleScroll("about")}
                >
                  About
                </li>

                <li
                  className={
                    active === "projects"
                      ? "active-link"
                      : ""
                  }
                  onClick={() => handleScroll("projects")}
                >
                  Projects
                </li>

                <li
                  className={
                    active === "contact"
                      ? "active-link"
                      : ""
                  }
                  onClick={() => handleScroll("contact")}
                >
                  Contact
                </li>

              </ul>

            </motion.nav>

          </>
        )}

      </AnimatePresence>
    </>
  );
}