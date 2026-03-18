import Chip from "../skills/Chip";
import "./projects.scss";

export interface Project {
  id: string;
  title: string;
  subTitle: string;
  context: string;
  chips: string[];
  features: string[];
  images: string[];
  website?: string;
  sourceCode?: string;
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <>
      <div className="projects">
        {projects.map((project) => {
          return (
            <div className="project" key={project.id}>
              <div className="image">
                <img src={project.images[0]} alt="" />
              </div>
              <div className="title">
                <div className="text">{project.title}</div>
                <button className="discover">Discover</button>
              </div>
              <div className="subtitle">{project.subTitle}</div>
              <div className="chips">
                {project.chips.map((chip) => (
                  <Chip text={chip} image={""} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
