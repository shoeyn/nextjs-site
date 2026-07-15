"use client";

import { useEffect, useRef, useState } from "react";

const CASE_VARIATIONS = ["ns", "Ns", "nS", "NS"];
const GLITCH_CHARS = [
  "n",
  "s",
  "N",
  "S",
  "1",
  "0",
  "_",
  "-",
  "/",
  "[",
  "]",
  "{",
  "}",
  "x",
  "y",
];

export function Logo() {
  const [text, setText] = useState("ns");
  const [isGlitching, setIsGlitching] = useState(false);

  // Keep a ref of current text to avoid interval closure staleness and React concurrent state racing
  const textRef = useRef(text);
  useEffect(() => {
    textRef.current = text;
  }, [text]);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      let step = 0;
      const totalSteps = 5;

      const current = textRef.current;
      const pool = CASE_VARIATIONS.filter((v) => v !== current);
      const target = pool[Math.floor(Math.random() * pool.length)] || "ns";

      const glitchInterval = setInterval(() => {
        step++;
        if (step >= totalSteps) {
          clearInterval(glitchInterval);
          setText(target);
          setIsGlitching(false);
        } else {
          // Generate a random 2-character glitch text using narrow monospace symbols
          const c1 =
            Math.random() > 0.4
              ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
              : target[0];
          const c2 =
            Math.random() > 0.4
              ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
              : target[1];
          setText(c1 + c2);
        }
      }, 45); // 45ms per step, total ~225ms
    };

    const interval = setInterval(triggerGlitch, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      viewBox="0 0 512 512"
      className="h-9 w-9 transition-transform duration-300 hover:scale-105"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop className="stop-start" offset="0%" />
          <stop className="stop-end" offset="100%" />
        </linearGradient>

        <style>{`
          .logo-text {
            fill: #0f172a;
            transform-origin: center;
            transform-box: fill-box;
            transition: fill 0.3s ease;
          }
          .logo-text.glitch-active {
            animation: text-glitch 0.2s infinite;
          }
          .logo-underline {
            animation: logo-blink 1.0s infinite ease-in-out;
          }
          .stop-start {
            stop-color: #6366f1;
          }
          .stop-end {
            stop-color: #0ea5e9;
          }
          @keyframes logo-blink {
            0%, 45% { opacity: 1; }
            50%, 95% { opacity: 0.15; }
            100% { opacity: 1; }
          }
          @keyframes text-glitch {
            0% { transform: translate(0) skewX(0); }
            20% { transform: translate(-2px, 1px) skewX(3deg); }
            40% { transform: translate(2px, -1px) skewX(-3deg); }
            60% { transform: translate(-1px, 2px) skewX(1deg); }
            80% { transform: translate(2px, 1px) skewX(-2deg); }
            100% { transform: translate(0) skewX(0); }
          }
          .dark .logo-text {
            fill: #f4f4f5 !important;
          }
          .dark .stop-start {
            stop-color: #a855f7 !important;
          }
          .dark .stop-end {
            stop-color: #06b6d4 !important;
          }
        `}</style>
      </defs>

      {/* Lowercase Monospace Developer Monogram (Dynamic casing & glitch classes) */}
      <text
        className={`logo-text ${isGlitching ? "glitch-active" : ""}`}
        x="268"
        y="380"
        fontFamily="'JetBrains Mono', 'Fira Code', 'Segoe UI Mono', Consolas, Menlo, Monaco, monospace"
        fontSize="410"
        fontWeight="normal"
        letterSpacing="-10"
        textAnchor="middle"
      >
        {text}
      </text>

      {/* Accent Underline Capsule (Blinking caret animation) */}
      <rect
        className="logo-underline"
        fill="url(#logo-grad)"
        x="20"
        y="430"
        width="472"
        height="28"
        rx="14"
      />
    </svg>
  );
}
