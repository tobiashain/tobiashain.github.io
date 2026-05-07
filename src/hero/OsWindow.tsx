import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";

export function OsWindow() {
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
          <div className="start-btn">
            <img src="/icons/windows.png" alt="" className="win-icon" />
          </div>
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
