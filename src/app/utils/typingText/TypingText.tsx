import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void; // ✅ add optional callback
}

const TypingText = ({ text, speed = 20, onComplete }: TypingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // reset index if text changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [text]);

  // type characters one by one
  useEffect(() => {
    if (currentIndex >= text.length) {
      onComplete?.(); // ✅ call callback when finished
      return;
    }

    const timer = setTimeout(() => setCurrentIndex((prev) => prev + 1), speed);
    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, onComplete]);

  return <span>{text.slice(0, currentIndex)}</span>;
};

export default TypingText;
