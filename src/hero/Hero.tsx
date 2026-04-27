import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";
import { Particles } from "./Particles";
import { AnimatedWord } from "./AnimatedWord";
import { Caret } from "./Caret";
import { OsWindow } from "./OsWindow";
import "./hero.scss";

export default function Hero() {
  const [scopeFS, animateFS] = useAnimate();
  const [scopeDev, animateDev] = useAnimate();

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const xOffset = isMobile ? 25 : 80;

    animateFS(
      scopeFS.current,
      { x: xOffset },
      { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
    ).then(() => {
      animateFS(
        scopeFS.current,
        { y: -10 },
        {
          duration: 2.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      );
    });

    animateDev(
      scopeDev.current,
      { x: -xOffset },
      { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    ).then(() => {
      animateDev(
        scopeDev.current,
        { y: -10 },
        {
          duration: 2.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 1.25,
        },
      );
    });
  }, []);

  return (
    <div className="hero">
      <Particles />

      <div className="content">
        <motion.div
          className="introduction"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="image">
            <img src="https://picsum.photos/200" alt="Tobias Hain" />
          </div>
          <div className="intro-text">
            <div className="status">
              <span className="dot" />
              Available for work
            </div>
            <h1 className="name">Tobias Hain</h1>
          </div>
        </motion.div>

        <div className="title">
          <motion.div
            ref={scopeFS}
            className="line"
            style={{
              skewX: "-8deg",
              display: "block",
              letterSpacing: "0.05em",
            }}
            initial={{ x: 200 }}
          >
            <span className="line-text">
              <AnimatedWord word="FULLSTACK" delay={0.15} />
            </span>
          </motion.div>

          <motion.div
            ref={scopeDev}
            className="line"
            style={{
              skewX: "-8deg",
              display: "block",
              letterSpacing: "0.02em",
              fontWeight: 700,
              marginTop: "-0.1em",
            }}
            initial={{ x: -200 }}
          >
            <span className="line-text">
              <AnimatedWord word="DEVELOPER" delay={0.35} />
            </span>
            <Caret />
          </motion.div>
        </div>

        <motion.p
          className="tagline"
          initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 }}
        >
          I build fast, thoughtful web experiences — from pixel-perfect UIs to
          rock-solid backends.
        </motion.p>

        <motion.div
          className="links"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.05,
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
        >
          <button className="primary">Contact me</button>
          <button className="icon">
            <img src="/icons/github.png" alt="GitHub" />
          </button>
        </motion.div>
      </div>

      <div className="tobios-teaser" id="tobiOS">
        <div className="teaser-inner">
          <motion.div
            className="teaser-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            You're looking at the minimal version.
          </motion.div>

          <motion.h2
            className="teaser-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            The real portfolio is an entire operating system.
          </motion.h2>

          <motion.p
            className="teaser-sub"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            TobiOS is a fully interactive Windows-style desktop — with real
            apps, a file system, a taskbar, and everything about my work living
            inside it.
          </motion.p>

          <OsWindow />
          <a href="https://tobiashain.github.io/TobiOS/" target="_blank">
            <motion.button
              className="teaser-cta"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 280,
                damping: 18,
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="win-icon">⊞</span>
              Launch TobiOS
              <span className="arrow">→</span>
            </motion.button>
          </a>
        </div>
      </div>
      <div className="wave-divider" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--bg)"
          />

          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40"
            fill="none"
            stroke="var(--border)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
