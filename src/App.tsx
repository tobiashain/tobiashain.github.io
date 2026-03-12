import Hero from "./Hero";
import Career from "./Career";
import Skills from "./skills/Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import "./global.scss";

function App() {
  return (
    <>
      <main>
        <Hero />
        <Career />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
