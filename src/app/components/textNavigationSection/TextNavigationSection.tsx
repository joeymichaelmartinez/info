"use client";
import { useState, useEffect } from "react";
import TypingText from "../../utils/typingText/TypingText";
import { useRouter } from "next/navigation";

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

  // include welcome as the first item
  const allItems = ["Welcome to Joey's Portfolio!", ...navigationItems];

  const [currentSelected, setCurrentSelected] = useState(0);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);

  const handleNextItem = () => {
    setCurrentTypingIndex((prev) => prev + 1);
  };

  // Start typing first item when startTyping becomes true
  useEffect(() => {
    if (startTyping && currentTypingIndex === 0) {
      handleNextItem();
    }
  }, [startTyping, currentTypingIndex]);

  useEffect(()=>{
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        switch(currentSelected) {
          case 0:
            router.push("/ProjectsSection");
            break;
          case 1:
            router.push("/Bio");
            break;
          case 2:
            router.push("/Resume");
            break;
          case 3:
            router.push("/Adventure");
            break;

        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSelected]);

  // arrow key navigation
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

  const itemsToRender = allItems.slice(0, currentTypingIndex);

  return (
    <div className="textNavigationSection">
      {itemsToRender.map((item, index) => (
        <p key={index}>
          <a onClick={()=>router.push(index.toString())}>
            {index > 0 && index - 1 === currentSelected ? "[>]" : index > 0 ? "[ ]" : ""}{" "}
            <TypingText
              text={item}
              speed={5}
              onComplete={
                index === itemsToRender.length - 1 && currentTypingIndex < allItems.length
                  ? handleNextItem
                  : undefined
              }
            />
          </a>
        </p>
      ))}
    </div>
  );
}
