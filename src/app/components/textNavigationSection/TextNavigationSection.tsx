"use client";

import { useState, useEffect, useCallback } from "react";
import TypingText from "../../utils/typingText/TypingText";
import { useRouter } from "next/navigation";
import style from './TextNavigationSection.module.css';
import useDeviceType from "@/app/utils/deviceType/useDeviceType";

interface TextNavigationSectionProps {
  startTyping?: boolean;
}

export default function TextNavigationSection({ startTyping = false }: TextNavigationSectionProps) {
  const navigationItems = [
    "View Portfolio",
    "Learn About Me",
    "Download Resume",
    "Start Interactive Mode",
  ];

  const router = useRouter();
  const deviceType = useDeviceType();

  const navigationMap: Record<number, string> = {
    0: "/ProjectsSection",
    1: "/Bio",
    3: "/InteractiveMode",
  };

  const [currentSelected, setCurrentSelected] = useState(0);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);

  const handleClickNavigation = useCallback((index: number) => {
    if (index === 2) {
      window.open("/info/resume/JosephMartinezResume.pdf", "_blank");
    } else {
      const path = navigationMap[index];
      if (path && path !== window.location.pathname) {
        router.push(path);
      }
    }
  }, [router]);

  const handleNextItem = () => setCurrentTypingIndex((prev) => prev + 1);

  useEffect(() => {
    if (startTyping && currentTypingIndex === 0) handleNextItem();
  }, [startTyping, currentTypingIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleClickNavigation(currentSelected);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSelected, handleClickNavigation]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setCurrentSelected((prev) => (prev - 1 + navigationItems.length) % navigationItems.length);
      }
      if (e.key === "ArrowDown") {
        setCurrentSelected((prev) => (prev + 1) % navigationItems.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigationItems.length]);

  const allItems = ["Welcome to Joey's Portfolio!", ...navigationItems];
  const itemsToRender = allItems.slice(0, currentTypingIndex);

  return (
    <div className={style.textNavigationSection}>
      {itemsToRender.length > 0 && (
        <p>
          <TypingText
            text={allItems[0]}
            speed={5}
            onComplete={currentTypingIndex < allItems.length ? handleNextItem : undefined}
          />
        </p>
      )}

      <div className={`${style.selectableContainer} ${
        deviceType === 'mobile' ? style.mobileNavigation : ""
        }`}
      >
        {itemsToRender.slice(1).map((item, index) => {
          const isSelected = index === currentSelected;

          return (
            <p
              className={`${style.selectableItem} ${isSelected ? style.selectedItem : ""}`}
              key={index}
            >
              <button
                className={style.navButton}
                onClick={() => handleClickNavigation(index)}
              >
                {deviceType === 'desktop' ? (isSelected ? "[>]" : "[ ]") : ""}
                {" "}
                <TypingText
                  text={item}
                  speed={10}
                  onComplete={
                    index + 1 === itemsToRender.length - 1 && currentTypingIndex < allItems.length
                      ? handleNextItem
                      : undefined
                  }
                />
              </button>
            </p>
          );
        })}
      </div>
    </div>
  );
}
