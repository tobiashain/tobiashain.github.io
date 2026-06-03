import { useDividerParam } from "./prototype/PrototypeSwitcher";
import PrototypeSwitcher from "./prototype/PrototypeSwitcher";
import VariantB from "./prototype/VariantB";
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

const dividers: Record<string, React.ComponentType> = {
  b: VariantB,
};

function App() {
  const divider = useDividerParam();

  if (!divider) {
    return (
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
    );
  }

  const DividerComp = dividers[divider];

  return (
    <>
      <div className={`proto-root proto-${divider}`}>
        <main>
          <Header />
          <Hero />
          <DividerComp />
          <Career />
          <DividerComp />
          <Skills />
          <DividerComp />
          <Projects projects={projects} />
          <DividerComp />
          <CTA />
          <Footer />
        </main>
      </div>
      <PrototypeSwitcher />
    </>
  );
}

export default App;
