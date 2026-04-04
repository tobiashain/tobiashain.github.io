import "./career.scss";
import CareerSection from "./CareerSection";

export interface Experience {
  id: string;
  image: string;
  date: string;
  activity: string;
  type: string;
  context: string;
  link?: string;
}

const experience: Experience[] = [
  {
    id: "internship",
    image: "https://picsum.photos/seed/internship/200",
    date: "2023 — 1 month",
    activity: "Moving Primates",
    type: "Web Developer Intern",
    context:
      "First industry exposure — working on real client projects in a professional team environment.",
    link: "https://www.movingprimates.de/",
  },
  {
    id: "civilian",
    image: "https://picsum.photos/seed/civilian/200",
    date: "2024 – 2025 · 9 months",
    activity: "Civilian Service",
    type: "Mandatory Service — Completed",
    context:
      "9 months of commitment, reliability, and operating outside of a comfort zone.",
    link: "https://www.sozialzentrum.at/",
  },
  {
    id: "school",
    image: "https://picsum.photos/seed/school/200",
    date: "2019 – 2024",
    activity: "Handelsakademie Digital Business Kitzbühel",
    type: "Information Technology",
    context:
      "Full programme covering networking, software development, databases, and systems administration. Graduated with a thesis on web application design and development.",
    link: "https://hak-kitz.eu/",
  },
];

const projects = [
  {
    id: "portfolio",
    image: "https://picsum.photos/seed/tobios/200",
    date: "2025 – Present",
    activity: "TobiOS",
    type: "Full-Stack · Personal Project",
    context:
      "Browser-based OS environment built from scratch — real file system, taskbar, apps, and a full desktop UI. The most technically ambitious thing I've built.",
    link: "#",
  },
  {
    id: "simplefeedback",
    image: "https://picsum.photos/seed/portfolio/200",
    date: "2025 – Present",
    activity: "Simplefeedback",
    type: "React · SCSS · TypeScript · NestJS",
    context:
      "Designed and built end-to-end — both a minimal mode and an immersive OS-style experience as a showcase of craft and attention to detail.",
    link: "https://simplefeedback.de/",
  },
  {
    id: "godot",
    image: "https://picsum.photos/seed/godot/200",
    date: "2026 – Present · 3 months in",
    activity: "Skyfallow - Farming Simulator",
    type: "Godot · GDScript · Game Dev",
    context:
      "Self-taught game development — architecting systems for farming mechanics, save states, and world simulation in Godot with no prior engine experience.",
  },
  {
    id: "odin",
    image: "https://picsum.photos/seed/odin/200",
    date: "Completed 2025",
    activity: "The Odin Project",
    type: "Full-Stack Web Development",
    context:
      "Completed the full curriculum independently — HTML, CSS, JavaScript, React, Node, databases. Self-directed learning beyond the school syllabus.",
    link: "https://www.theodinproject.com",
  },
];

export default function Career() {
  return (
    <div className="career">
      <section className="career-group">
        <p className="section-title" id="experience">
          Experience
        </p>
        <div className="table">
          <div className="line" />
          {experience.map((item) => (
            <CareerSection item={item} />
          ))}
        </div>
      </section>

      <section className="career-group">
        <p className="section-title">
          Projects
          <span className="section-badge">Independent work</span>
        </p>
        <div className="table">
          <div className="line" />
          {projects.map((item) => (
            <CareerSection item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
