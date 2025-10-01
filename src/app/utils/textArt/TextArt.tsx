import { useEffect, useState } from "react";

interface TextArtProps {
  label: string;
  text: string;
  speed?: number;
  onComplete?: () => void;
}

const TextArt = ({ label, text, speed = 1, onComplete }: TextArtProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0); // reset if text changes
  }, [text]);

  useEffect(() => {
    if (currentIndex >= text.length) {
      onComplete?.(); // call callback when finished
      return;
    }

    const timer = setTimeout(() => setCurrentIndex((prev) => prev + 1), speed);
    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, onComplete]);

  return (
    <pre
      aria-label={label}
      style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
    >
      {text.slice(0, currentIndex)}
    </pre>
  );
};

export default TextArt;
