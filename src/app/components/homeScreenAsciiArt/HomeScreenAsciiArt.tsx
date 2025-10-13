import TextArt from "@/app/utils/textArt/TextArt";
import { useEffect, useState } from "react";
import style from './HomeScreenAsciiArt.module.css';
import useDeviceType from "@/app/utils/deviceType/useDeviceType";
import asciiArt from "../../../../public/ascii/asciiArt.png"

interface HomeScreenAsciiArtProps {
  onComplete: () => void
}

export default function HomeScreenAsciiArt({ onComplete }: HomeScreenAsciiArtProps) {
  const [scrollingBootText, setScrollingBootText] = useState("");
  const deviceType = useDeviceType();
  useEffect(() => {
    const getAsciiArt = async () => {
      const asciiArtPromise = await fetch("/ascii/asciiArt.txt");
      const asciiArt = await asciiArtPromise.text();
      setScrollingBootText(asciiArt);
    };
    getAsciiArt();
  }, []);

  useEffect(() => {
    if(deviceType==="mobile") {
      onComplete?.();
      return;
    }
  }, [deviceType, onComplete]);

  return (
    (deviceType === "desktop" ? <div className={style.homeScreenAsciiArt}>
      {scrollingBootText ?
        <TextArt onComplete={onComplete} label="Ascii Art" text={scrollingBootText} speed={5} /> : 
        <></>
      }
    </div> :
      <img className={style.mobileAsciiImage} src={asciiArt.src} alt="Mobile Ascii Art" />
    )
  );
}