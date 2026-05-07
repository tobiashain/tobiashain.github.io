import { useState, useEffect, useCallback } from "react";
import Chip from "../skills/Chip";
import Project from "./Project";
import "./projects.scss";
import type { Project as ProjectType } from "../projects";

const INITIAL_COUNT = 4;

export default function Projects({ projects }: { projects: ProjectType[] }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const visible = expanded ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  const closeModal = useCallback(() => setSelectedProjectId(null), []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProjectId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProjectId]);

  // Escape key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  return (
    <>
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
                <button
                  className="discover"
                  onClick={() => setSelectedProjectId(project.id)}
                >
                  Discover{" "}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
              <div className="subtitle">{project.subTitle}</div>
              <div className="chips">
                {project.chips.map((chip) => (
                  <Chip key={chip} text={chip} image="" />
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

      {selectedProjectId && (
        <div className="project-modal" onClick={closeModal}>
          <div
            className="project-modal__content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="project-modal__close"
              onClick={closeModal}
              aria-label="Close project details"
            >
              ✕
            </button>
            <Project windowId={selectedProjectId} />
          </div>
        </div>
      )}
    </>
  );
}
