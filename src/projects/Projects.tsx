import { useState } from "react";
import Chip from "../skills/Chip";
import "./projects.scss";
import type { Project } from "../projects";

const INITIAL_COUNT = 4;

export default function Projects({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <div className="projects" id="projects">
      <div className="section-header">
        <p>Projects</p>
      </div>

      <div className={`projects-container ${expanded ? "expanded" : ""}`}>
        {visible.map((project) => (
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
                <Chip key={chip} text={chip} image={""} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="expand-row">
          {!expanded && <div className="fade-veil" />}

          <button
            className={`expand-btn ${expanded ? "collapse" : ""}`}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? (
              <>
                Show less <span className="chevron">↑</span>
              </>
            ) : (
              <>
                View all {projects.length} projects{" "}
                <span className="chevron">↓</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
