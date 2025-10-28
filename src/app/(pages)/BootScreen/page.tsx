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
      const randomIndexesUsed = new Set<number>();
      const interval = setInterval(() => {
        let randomBootLineIndex: number;
      do {
        randomBootLineIndex = Math.floor(Math.random() * lines.length);
      } while (randomIndexesUsed.has(randomBootLineIndex));

      randomIndexesUsed.add(randomBootLineIndex);
        setDisplayedLines((prev) => [...prev, lines[randomBootLineIndex]]);
        i++;
        if (i >= 6) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 1000);
        }
      }, 600);

      return () => clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (!done) return;

    const handleKeyDown = () => {
        router.push("/HomeScreen");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [done, router]);

  return (
    
    <div onClick={(e) => done ? router.push("/HomeScreen"): e.preventDefault()} className={`${styles.bootText} h-full`}>
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
  "Tokenizing real life...",
  "Bending the spoon...",
  "Swimming to the moon...",
  "Creating time-loop inversion field",
  "[info] All systems nominal",
  "[error] Unexpected level of curiosity detected",
  "[fix] Curiosity normalized to safe levels",
];
