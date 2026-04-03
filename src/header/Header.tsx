import { motion } from "motion/react";
import "./header.scss";

export default function Header() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
    >
      <a href="#">
        <button className="nav">Home</button>
      </a>
      <a href="#tobiOS">
        <button className="nav">TobiOS</button>
      </a>
      <a href="#experience">
        <button className="nav">Experience</button>
      </a>
      <a href="#projects">
        <button className="nav">Projects</button>
      </a>
      <a href="#contact">
        <button className="nav">Contact</button>
      </a>
    </motion.nav>
  );
}
