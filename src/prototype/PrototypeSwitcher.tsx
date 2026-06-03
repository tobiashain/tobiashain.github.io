import { useState, useEffect, useCallback } from "react";
import "./divider-prototype.scss";

const SWITCH_EVENT = "proto-divider-change";

const variants = ["b"] as const;
type Var = (typeof variants)[number];

const labels: Record<Var, string> = {
  b: "B — ASCII Terminal",
};

export function getDividerParam(): Var | null {
  const raw = new URLSearchParams(window.location.search).get("divider");
  if (raw && (variants as readonly string[]).includes(raw.toLowerCase())) {
    return raw.toLowerCase() as Var;
  }
  return null;
}

export function dispatchDividerChange(v: Var) {
  window.dispatchEvent(new CustomEvent(SWITCH_EVENT, { detail: v }));
}

export function useDividerParam(): Var | null {
  const [divider, setDivider] = useState<Var | null>(() => getDividerParam());

  useEffect(() => {
    const handler = (e: Event) => {
      setDivider((e as CustomEvent<Var>).detail);
    };
    window.addEventListener(SWITCH_EVENT, handler as EventListener);
    return () =>
      window.removeEventListener(SWITCH_EVENT, handler as EventListener);
  }, []);

  return divider;
}

export default function PrototypeSwitcher() {
  const [divider, setDivider] = useState<Var | null>(() => getDividerParam());

  const go = useCallback(
    (dir: "prev" | "next") => {
      setDivider((prev) => {
        const current = prev ?? "b";
        const idx = variants.indexOf(current);
        const next =
          dir === "next"
            ? variants[(idx + 1) % variants.length]
            : variants[(idx - 1 + variants.length) % variants.length];
        const url = new URL(window.location.href);
        url.searchParams.set("divider", next);
        window.history.replaceState(null, "", url.toString());
        dispatchDividerChange(next);
        return next;
      });
    },
    [],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      if (e.key === "ArrowLeft") go("prev");
      if (e.key === "ArrowRight") go("next");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <div className="proto-switcher">
      <button
        className="proto-switcher-btn"
        onClick={() => go("prev")}
        aria-label="Previous variant"
      >
        &#x2190;
      </button>
      <span className="proto-switcher-label">
        <span className="variant-letter">
          {divider?.toUpperCase() ?? "?"}
        </span>
        {divider ? labels[divider].replace(/^. — /, "") : "..."}
      </span>
      <button
        className="proto-switcher-btn"
        onClick={() => go("next")}
        aria-label="Next variant"
      >
        &#x2192;
      </button>
    </div>
  );
}
