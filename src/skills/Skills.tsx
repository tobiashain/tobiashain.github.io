import Chip from "./Chip";
import "./skills.scss";
export default function Skills() {
  const skills = [
    { text: "Javascript", image: "vite.svg" },
    { text: "Typescript", image: "vite.svg" },
    { text: "React", image: "vite.svg" },
    { text: "Nest.js", image: "vite.svg" },
    { text: "Node.js", image: "vite.svg" },
    { text: "PHP", image: "vite.svg" },
    { text: "Tailwind CSS", image: "vite.svg" },
    { text: "Bootstrap", image: "vite.svg" },
    { text: "Sass", image: "vite.svg" },
    { text: "MySQL", image: "vite.svg" },
    { text: "C#", image: "vite.svg" },
    { text: "Git", image: "vite.svg" },
    { text: "Docker", image: "vite.svg" },
    { text: "Wordpress", image: "vite.svg" },
  ];
  return (
    <>
      <div className="skills">
        {skills.map((skill, index) => {
          return <Chip key={index} text={skill.text} image={skill.image} />;
        })}
      </div>
    </>
  );
}
