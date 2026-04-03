import { motion } from "motion/react";

export function AnimatedWord({
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
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #ffffff 20%, #8da5c5 70%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
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
