import { useState, useEffect } from "react";

export default function useTypingEffect(
  lines: string[],
  speed: number = 30,
  lineDelay: number = 200
) {
  const [typedLines, setTypedLines] = useState<string[]>([]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = "";
    let interval: NodeJS.Timeout;

    setTypedLines([]); // reset when dependencies change

    function typeChar() {
      if (lineIndex >= lines.length) {
        clearInterval(interval);
        return;
      }

      currentLine += lines[lineIndex][charIndex];
      setTypedLines((prev) => {
        const newLines = [...prev];
        if (newLines[lineIndex]) {
          newLines[lineIndex] = currentLine;
        } else {
          newLines.push(currentLine);
        }
        return newLines;
      });

      charIndex++;

      if (charIndex >= lines[lineIndex].length) {
        // finished a line, wait lineDelay then move to next
        clearInterval(interval);
        lineIndex++;
        charIndex = 0;
        currentLine = "";
        if (lineIndex < lines.length) {
          setTimeout(() => {
            interval = setInterval(typeChar, speed);
          }, lineDelay);
        }
      }
    }

    interval = setInterval(typeChar, speed);

    return () => clearInterval(interval);
  }, [lines, speed, lineDelay]);

  return typedLines;
}
