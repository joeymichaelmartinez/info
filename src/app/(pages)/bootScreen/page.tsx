"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./BootScreen.module.css";
import useDeviceType from "@/app/utils/deviceType/useDeviceType";

export default function BootScreen() {
  const [step, setStep] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const router = useRouter();
  const deviceType = useDeviceType();

  useEffect(() => {
    const bootTimeout = setTimeout(() => setStep(1), 1000);
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
          setTimeout(() => setDone(true), 100);
        }
      }, 800);

      return () => clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (!done) return;

    const handleKeyDown = (e: KeyboardEvent) => {
        router.push("/homeScreen");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [done, router]);

  return (
    <div onClick={() => router.push("/homeScreen")} className={styles.bootText}>
      <div className={styles.initialBootText}>
        {step === 0 && <div className={styles.blink}>Booting...</div>}
        {!done && step >= 1 &&
          displayedLines.map((line, idx) => (
            <div key={idx} className={styles.fadeIn} >
              {line}
            </div>
          ))}
      </div>
      {done && <div className={styles.continueScreen}>
        <div> Welcome, Adventurer</div>
        <div className={styles.blink}>{deviceType === "desktop" ? "Press Any Button to continue..." : "Tap Screen to continue"}</div>
        </div>
        }
    </div>
  );
}

const lines = [
  "System Processing...",
  "[error] Unexpected Creativity Overflow",
  "[fix] Creativity normalized",
  "Reticulating splines",
  "Generating witty loading messages...",
  "Swapping time and space...",
  "Adjusting flux capacitor...",
];
