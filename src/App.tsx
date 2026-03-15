import Header from "./header/Header";
import Hero from "./hero/Hero";
import Career from "./career/Career";
import Skills from "./skills/Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import "./global.scss";

function App() {
  return (
    <>
      <main>
        <Header />
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
