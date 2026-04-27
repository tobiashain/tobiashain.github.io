import { motion } from "motion/react";
import "./header.scss";

export default function Header() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
    >
      <a href="#" className="nav">
        Home
      </a>
      <a href="#tobiOS" className="nav">
        TobiOS
      </a>
      <a href="#experience" className="nav">
        Experience
      </a>
      <a href="#projects" className="nav">
        Projects
      </a>
      <a href="#contact" className="nav">
        Contact
      </a>
    </motion.nav>
  );
}
