"use client";
import { useState } from "react";
import TextNavigationSection from "@/app/components/textNavigationSection/TextNavigationSection";
import HomeScreenAsciiArt from "@/app/components/homeScreenAsciiArt/HomeScreenAsciiArt";
import InputHints from "@/app/components/inputHints/InputHints";
import useDeviceType from "@/app/utils/deviceType/useDeviceType";

export default function HomeScreen() {
  const deviceType = useDeviceType();
  const [asciiDone, setAsciiDone] = useState(false);

  return (
    <>
      <HomeScreenAsciiArt onComplete={() => setAsciiDone(true)} />
      <TextNavigationSection startTyping={asciiDone} />
      {asciiDone && <InputHints hintText={deviceType === 'desktop' ?
        `Use ↑ ↓ to navigate, Enter to select, or click item to navigate!` :
        `Tap any of the items to navigate to the page!`
      } />}

    </>
  );
}
