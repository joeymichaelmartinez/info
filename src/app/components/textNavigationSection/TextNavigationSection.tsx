"use client";
import { useState, useEffect } from "react";
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
    "Start Adventure Mode",
  ];

  const router = useRouter();

  const allItems = ["Welcome to Joey's Portfolio!", ...navigationItems];

  const [currentSelected, setCurrentSelected] = useState(0);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);

  const deviceType = useDeviceType();
  const navigationMap: Record<number,string> = {
    0: "/ProjectsSection",
    1: "/Bio",
    2: "/resume/JosephMartinezResume.pdf",
    3: "/Adventure",
  }

  const handleNextItem = () => {
    setCurrentTypingIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (startTyping && currentTypingIndex === 0) {
      handleNextItem();
    }
  }, [startTyping, currentTypingIndex]);

  useEffect(()=>{
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleClickNavigation(currentSelected);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSelected]);

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

  const handleClickNavigation = (index: number) => {
    if (index === 2) {
        const link = document.createElement("a");
        link.href = "/resume/JosephMartinezResume.pdf";
        link.download = "JosephMartinezResume.pdf";
        link.click();
      } else {
        const path = navigationMap[index];
        if(path) router.push(path);
      }
  }

  const itemsToRender = allItems.slice(0, currentTypingIndex);

  return (
  <div className={style.textNavigationSection}>
    {itemsToRender.length > 0 && (
      <p>
        <TypingText
          text={allItems[0]}
          speed={5}
          onComplete={
            currentTypingIndex < allItems.length ? handleNextItem : undefined
          }
        />
      </p>
    )}

    <div className={style.selectableContainer}>
      {itemsToRender.slice(1).map((item, index) => (
        <p className={style.selectableItem} key={index}>
          <a onClick={()=> handleClickNavigation(index)}>
            {index === currentSelected ? "[>]" : "[ ]"}{" "}
            <TypingText
              text={item}
              speed={10}
              onComplete={
                index + 1 === itemsToRender.length - 1 &&
                currentTypingIndex < allItems.length
                  ? handleNextItem
                  : undefined
              }
            />
          </a>
        </p>
      ))}
    </div>
  </div>
);
}
