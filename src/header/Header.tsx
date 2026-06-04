import { motion } from "motion/react";
import "./header.scss";

export default function Header() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
    >
      <div className="nav__titlebar">
        <div className="nav__traffic-lights">
          <span className="nav__light nav__light--red" />
          <span className="nav__light nav__light--yellow" />
          <span className="nav__light nav__light--green" />
        </div>
        <div className="nav__title">portfolio.exe</div>
      </div>
      <div className="nav__links">
        <a href="#" className="nav__link">
          Home
        </a>
        <a href="#tobiOS" className="nav__link">
          TobiOS
        </a>
        <a href="#experience" className="nav__link">
          Experience
        </a>
        <a href="#projects" className="nav__link">
          Projects
        </a>
        <a href="#contact" className="nav__link">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
