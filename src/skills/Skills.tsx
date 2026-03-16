import Chip from "./Chip";
import "./skills.scss";
export default function Skills() {
  const skills = [
    { text: "Javascript", image: "javascript.png" },
    { text: "Typescript", image: "typescript.png" },
    { text: "React", image: "react.png" },
    { text: "Nest.js", image: "nestjs.png" },
    { text: "Node.js", image: "nodejs.png" },
    { text: "PHP", image: "php.png" },
    { text: "Tailwind CSS", image: "tailwindcss.png" },
    { text: "Bootstrap", image: "bootstrap.png" },
    { text: "Sass", image: "sass.png" },
    { text: "MySQL", image: "mysql.png" },
    { text: "C#", image: "csharp.png" },
    { text: "Git", image: "git.png" },
    { text: "Docker", image: "docker.png" },
    { text: "Wordpress", image: "wordpress.png" },
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
