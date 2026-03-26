import Header from "./header/Header";
import Hero from "./hero/Hero";
import Career from "./career/Career";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";
import "./global.scss";
import { projects } from "./projects";
import { type Project } from "./projects";

function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Career />
        <Skills />
        <Projects projects={projects.slice(0, 4)} />
        <Footer />
      </main>
    </>
  );
}

export default App;
