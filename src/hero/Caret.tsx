import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Caret() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setVisible((v) => !v), 530);
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
