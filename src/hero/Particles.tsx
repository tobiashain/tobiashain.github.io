import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Particles() {
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

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="particles" aria-hidden="true">
      {isInView &&
        particles.map((p) => (
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
