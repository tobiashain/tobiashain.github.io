import Header from "./header/Header";
import Hero from "./hero/Hero";
import Career from "./career/Career";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";
import "./global.scss";
import { projects } from "./projects";
import CTA from "./cta/Cta";
import Separator from "./Separator";

function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Career />
        <Separator />
        <Skills />
        <Separator />
        <Projects projects={projects} />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
