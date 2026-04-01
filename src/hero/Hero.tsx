import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import "./hero.scss";

// ── Floating particles background ───────────────────────────────────────────
function Particles() {
  const particles = Array.from({ length: 56 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 6,
    driftX: (Math.random() - 0.5) * 60,
    driftY: (Math.random() - 0.5) * 60,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ── Letter-by-letter stagger ─────────────────────────────────────────────────
function AnimatedWord({
  word,
  delay = 0,
  className = "",
}: {
  word: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.045,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

// ── Blinking terminal caret ──────────────────────────────────────────────────
function Caret() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setVisible((v) => !v), 530);
    // disappear after 2.8s
    const timeout = setTimeout(() => clearInterval(interval), 2800);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.span
      className="caret"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0 }}
    />
  );
}

// ── OS Window with boot sequence ─────────────────────────────────────────────
function OsWindow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current!.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    animate(mouseX, 0, { duration: 0.5 });
    animate(mouseY, 0, { duration: 0.5 });
  }

  const icons = [
    { icon: "📁", label: "Projects" },
    { icon: "💼", label: "Experience" },
    { icon: "⚙️", label: "Tech Stack" },
    { icon: "📬", label: "Contact" },
    { icon: "🎮", label: "Games" },
    { icon: "📝", label: "About me" },
  ];

  return (
    <motion.div
      ref={ref}
      className="os-window"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Titlebar */}
      <motion.div
        className="titlebar"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div className="titlebar-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="titlebar-title">TobiOS — Portfolio.exe</div>
        <div className="titlebar-spacer" />
      </motion.div>

      {/* OS body */}
      <div className="os-body">
        <div className="desktop-icons">
          {icons.map(({ icon, label }, i) => (
            <motion.div
              className="icon-item"
              key={label}
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35 + i * 0.08,
                duration: 0.4,
                type: "spring",
                stiffness: 280,
                damping: 20,
              }}
            >
              <div className="icon-img">{icon}</div>
              <span>{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Taskbar slides up last */}
        <motion.div
          className="taskbar"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.45, ease: "easeOut" }}
        >
          <div className="start-btn">⊞</div>
          <div className="taskbar-items">
            <div className="taskbar-item active">Portfolio.exe</div>
            <div className="taskbar-item">Terminal</div>
            <div className="taskbar-item">Chrome</div>
          </div>
          <div className="clock">10:24 AM</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <div className="hero">
      <Particles />

      <div className="content">
        {/* Introduction — scale up from slightly small */}
        <motion.div
          className="introduction"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Title — letter stagger + blur + skew preserved */}
        <div className="title">
          <motion.div
            className="line"
            style={{
              skewX: "-8deg",
              display: "block",
              letterSpacing: "0.05em",
            }}
            initial={{ x: 200 }}
            animate={{ x: 80 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <AnimatedWord word="FULLSTACK" delay={0.15} />
          </motion.div>
          <motion.div
            className="line"
            style={{
              skewX: "-8deg",
              display: "block",
              letterSpacing: "0.02em",
              fontWeight: 700,
              marginTop: "-0.1em",
            }}
            initial={{ x: -200 }}
            animate={{ x: -80 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <AnimatedWord word="DEVELOPER" delay={0.35} />
            <Caret />
          </motion.div>
        </div>

        {/* Tagline — rises up */}
        <motion.p
          className="tagline"
          initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 }}
        >
          I build fast, thoughtful web experiences — from pixel-perfect UIs to
          rock-solid backends.
        </motion.p>

        {/* Links — spring bounce entrance */}
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

      {/* TobiOS teaser */}
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
        </div>
      </div>
    </div>
  );
}
