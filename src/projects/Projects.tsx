import Chip from "../skills/Chip";
import "./projects.scss";
import type { Project } from "../projects";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <>
      <div className="projects">
        <div className="section-title">
          <p>Projects</p>
          <div className="view-more">
            <a href="/projects">View More</a>
          </div>
        </div>
        <div className="projects-container">
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
      </div>
    </>
  );
}
