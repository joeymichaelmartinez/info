import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

const TypingText = ({ text, speed = 20, onComplete }: TypingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex >= text.length) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => setCurrentIndex((prev) => prev + 1), speed);
    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, onComplete]);

  return <span>{text.slice(0, currentIndex)}</span>;
};

export default TypingText;
