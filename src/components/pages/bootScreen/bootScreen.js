import { useEffect, useState } from "react";

// import { bootText } from "../../../data/asciiArt.txt";
import TextArt from "../../utils/textArt/TextArt";

export function BootScreen() {
  const [scrollingBootText, setScrollingBootText] = useState(''); 

useEffect(() => {
  const getAsciiArt = async () => {
    const asciiArtPromise = await fetch("/ascii/asciiArt.txt");
    const asciiArt = await asciiArtPromise.text();
    setScrollingBootText(asciiArt);
      // .then(res => res.text())
      // .then(scrollingBootText);
  }
  getAsciiArt();
}, []);


  return (
    <>
      <TextArt text={scrollingBootText} label="Ascii Art">{scrollingBootText}</TextArt>
    </>

  )
}