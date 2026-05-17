import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ setPage }) {
  const [open, setOpen] = useState(false);

  const handlePage = (target) => {
    setPage(target);
    setOpen(false);
  };

  return (
    <>
      {/* HAMBURGER */}
      <div
        className={`menu-btn ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

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

                <li onClick={() => handlePage("home")}>
                  Home
                </li>

                <li onClick={() => handlePage("about")}>
                  About
                </li>

                <li onClick={() => handlePage("projects")}>
                  Projects
                </li>

                <li onClick={() => handlePage("contact")}>
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