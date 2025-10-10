"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./BootScreen.module.css";

export default function BootScreen() {
  const [step, setStep] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const bootTimeout = setTimeout(() => setStep(1), 2000);
    return () => clearTimeout(bootTimeout);
  }, []);

  useEffect(() => {
    if (step === 1) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedLines((prev) => [...prev, lines[i]]);
        i++;
        if (i >= lines.length) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 500);
        }
      }, 800);

      return () => clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (!done) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        router.push("/homeScreen"); // ✅ navigate using router
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [done, router]);

  return (
    <div className={styles.bootText}>
      {step === 0 && <div className={styles.blink}>Booting...</div>}
      {step >= 1 &&
        displayedLines.map((line, idx) => (
          <div key={idx} className="fade-in" style={{ animationDelay: `${idx * 0.3}s` }}>
            {line}
          </div>
        ))}
      {done && <div className={styles.blink}>Press Enter to continue...</div>}
    </div>
  );
}

const lines = [
  "System Processing...",
  "[error] Unexpected Creativity Overflow",
  "[fix] Creativity normalized",
  "Welcome, Adventurer"
];
