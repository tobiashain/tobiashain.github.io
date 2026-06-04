import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "motion/react";
import "./divider.scss";

const labels = [
  "[ career.exe     ]",
  "[ skills.dll     ]",
  "[ projects.bin   ]",
  "[ contact.ini    ]",
];

const GLITCH_CHARS = "$@#%&*+=<>[]{}|\\/\\/~";

let labelIdx = 0;
function nextLabel() {
  return labels[labelIdx++ % labels.length];
}

function scrambleText(target: string, progress: number): string {
  const len = target.length;
  const revealed = Math.floor(progress * len);
  let result = "";
  for (let i = 0; i < len; i++) {
    if (target[i] === " ") {
      result += " ";
    } else if (i < revealed) {
      result += target[i];
    } else {
      result += GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    }
  }
  return result;
}

export default function Divider() {
  const label = nextLabel();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayLabel, setDisplayLabel] = useState(label);
  const [hasScrambled, setHasScrambled] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);

  const runScramble = useCallback(() => {
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayLabel(scrambleText(label, progress));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayLabel(label);
        setTimeout(() => setIsFlickering(true), 50);
        setTimeout(() => setIsFlickering(false), 500);
      }
    };

    requestAnimationFrame(tick);
  }, [label]);

  useEffect(() => {
    if (isInView && !hasScrambled) {
      setHasScrambled(true);
      runScramble();
    }
  }, [isInView, hasScrambled, runScramble]);

  return (
    <div
      ref={ref}
      className={`divider ${isFlickering ? "divider--flicker" : ""}`}
      aria-hidden="true"
    >
      <div className="divider__label">{displayLabel}</div>
      <svg
        viewBox="0 0 1200 36"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="divider__slash"
      >
        <text
          x="600"
          y="26"
          textAnchor="middle"
          fontSize="32"
          fontWeight="700"
          fill="rgba(6,182,212,0.45)"
          fontFamily="'Courier New', 'Consolas', monospace"
          letterSpacing="2"
        >
          /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
        </text>
      </svg>
      <div className="divider__label">&#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;</div>
    </div>
  );
}
