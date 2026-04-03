import { motion } from "motion/react";
import Chip from "./Chip";
import "./skills.scss";

export default function Skills() {
  const advanced = [
    { text: "Javascript", image: "javascript.png" },
    { text: "Typescript", image: "typescript.png" },
    { text: "React", image: "react.png" },
    { text: "Node.js", image: "nodejs.png" },
    { text: "MySQL", image: "mysql.png" },
    { text: "C#", image: "csharp.png" },
    { text: "Sass", image: "sass.png" },
    { text: "Git", image: "git.png" },
  ];

  const basic = [
    { text: "PHP", image: "php.png" },
    { text: "Wordpress", image: "wordpress.png" },
    { text: "Tailwind CSS", image: "tailwindcss.png" },
    { text: "Nest.js", image: "nestjs.png" },
    { text: "Docker", image: "docker.png" },
    { text: "GDScript", image: "godot.png" },
  ];

  return (
    <div className="skills">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </motion.p>

      <div className="skill-group">
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

      <div className="skill-group">
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
  );
}
