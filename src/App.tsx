import Header from "./header/Header";
import Hero from "./hero/Hero";
import Career from "./career/Career";
import Skills from "./skills/Skills";
import Projects, { type Project } from "./projects/Projects";
import Footer from "./Footer";
import "./global.scss";

export const projects: Project[] = [
  {
    id: "simplefeedback",
    title: "Simplefeedback",
    subTitle: "Customer-Relationship-Management Platform",
    context:
      "This project is part of a collaborative effort and remains a work in progress. Its goal is to create a CRM website that enables the tourism industry to efficiently collect and analyze customer feedback, while maintaining communication through an integrated email bot and HTML newsletter builder.",
    chips: [
      "React",
      "JavaScript",
      "TypeScript",
      "Sass",
      "MySQL",
      "NestJS",
      "Knex.js",
      "Docker",
      "Stripe",
      "Github Actions",
      "Google Cloud Storage",
      "Google OAuth 2.0",
    ],
    features: [
      "Create Surveys",
      "Stripe payment processing integration",
      "Data visualization via Diagrams",
      "HTML Email Builder",
      "Send Newsletters",
    ],
    images: [
      "/pictures/simplefeedback/1.png",
      "/pictures/simplefeedback/2.png",
      "/pictures/simplefeedback/3.png",
      "/pictures/simplefeedback/4.png",
    ],
    website: "https://simplefeedback.de/",
  },
  {
    id: "tobiOS",
    title: "TobiOS",
    subTitle: "Personal Website and Portfolio",
    context:
      "This website you are currently viewing serves as the central hub for all past, present, and future projects. Its design draws inspiration from the Vinesauce website, featuring an operating system–style interface.",
    chips: [
      "React",
      "JavaScript",
      "TypeScript",
      "Sass",
      "interact.js",
      "Github Actions",
      "Cloudflare Workers",
    ],
    features: [
      "Open, move, and resize windows",
      "Interactive desktop icons",
      "Taskbar window management",
      "Mini-games on the desktop",
      "Cloudflare Workers API integration",
      "Responsive and smooth UI",
      "Modular React components",
    ],
    images: [],
    website: "https://example.com/",
    sourceCode: "https://example.com/",
  },
];

function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Career />
        <Skills />
        <Projects projects={projects} />
        <Footer />
      </main>
    </>
  );
}

export default App;
