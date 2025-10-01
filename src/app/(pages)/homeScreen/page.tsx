"use client";
import { useState } from "react";
import TextNavigationSection from "@/app/components/textNavigationSection/TextNavigationSection";
import HomeScreenAsciiArt from "@/app/components/homeScreenAsciiArt/HomeScreenAsciiArt";

export default function HomeScreen() {
  const [asciiDone, setAsciiDone] = useState(false);

  return (
    <>
      <HomeScreenAsciiArt onComplete={() => setAsciiDone(true)} />
      <TextNavigationSection startTyping={asciiDone} />
    </>
  );
}
