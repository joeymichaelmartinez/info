import TextArt from "@/app/utils/textArt/TextArt";
import { useEffect, useState } from "react";

interface HomeScreenAsciiArtProps {
  onComplete: () => void
}

export default function HomeScreenAsciiArt({ onComplete }: HomeScreenAsciiArtProps) {
  const [scrollingBootText, setScrollingBootText] = useState("");
  useEffect(() => {
    const getAsciiArt = async () => {
      const asciiArtPromise = await fetch("/ascii/asciiArt.txt");
      const asciiArt = await asciiArtPromise.text();
      setScrollingBootText(asciiArt);
    };
    getAsciiArt();
  }, []);

  return (
    <div className="homeScreenAsciiArt">
      {scrollingBootText ?
        <TextArt onComplete={onComplete} label="Ascii Art" text={scrollingBootText} speed={5} /> : 
        <></>
      }
    </div>
  );
}