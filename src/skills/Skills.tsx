import { motion } from "motion/react";
import Chip from "./Chip";
import Divider from "../Divider";
import "./skills.scss";

export default function Skills() {
  const advanced = [
    { text: "Javascript", image: "javascript.webp" },
    { text: "Typescript", image: "typescript.webp" },
    { text: "React", image: "react.webp" },
    { text: "PHP", image: "php.webp" },
    { text: "Node.js", image: "nodejs.webp" },
    { text: "MySQL", image: "mysql.webp" },
    { text: "C#", image: "csharp.webp" },
    { text: "Sass", image: "sass.webp" },
    { text: "Git", image: "git.webp" },
  ];

  const basic = [
    { text: "Wordpress", image: "wordpress.webp" },
    { text: "Tailwind CSS", image: "tailwindcss.webp" },
    { text: "Nest.js", image: "nestjs.webp" },
    { text: "Docker", image: "docker.webp" },
    { text: "GDScript", image: "godot.webp" },
  ];

  return (
    <div className="skills">
      <Divider />
      <div className="skills__inner">
      <motion.p
        className="section-title"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="prompt">&gt;&gt;&gt;</span>
        Tech Stack
      </motion.p>

      <div className="skill-frame">
        <div className="frame-header">
          <span className="frame-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </span>
          <span className="frame-title">proficient.sh</span>
          <span className="frame-spacer" />
        </div>
        <div className="frame-body">
        <motion.div
          className="group-label"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="label-dot advanced" />
          Proficient
        </motion.div>
        <div className="chips">
          {advanced.map((skill, i) => (
            <motion.div
              key={skill.text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
            >
              <Chip text={skill.text} image={skill.image} variant="advanced" />
            </motion.div>
          ))}
        </div>
        </div>
      </div>

      <div className="connector-line" />

      <div className="skill-frame">
        <div className="frame-header">
          <span className="frame-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </span>
          <span className="frame-title">familiar.sh</span>
          <span className="frame-spacer" />
        </div>
        <div className="frame-body">
        <motion.div
          className="group-label"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="label-dot familiar" />
          Familiar
        </motion.div>
        <div className="chips">
          {basic.map((skill, i) => (
            <motion.div
              key={skill.text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.05 }}
            >
              <Chip text={skill.text} image={skill.image} variant="familiar" />
            </motion.div>
          ))}
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
