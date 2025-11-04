"use client";
import { useEffect, useRef, useState } from "react";
import ProgressSideBar from "./progressSideBar/ProgressSideBar";

interface ViewPortDimensions {
  width: number,
  height: number
}

interface FallingExperienceItem {
  id: string,
  position: { left: number; top: number },
  text: string,
  width: number,
}

export interface ExperienceProgressItems {
  count: number,
  text: string
}

interface GameSettings {
  fallSpeed: number,
  catcherSpeed: number,
  catcherFontSize: number,
  fallingTextFontSize: number
  frameIntervalMs: number,
  spawnIntervalMs: number,
  padding: number
}

export default function Adventure() {
  const viewPortRef = useRef<HTMLDivElement>(null);
  const catcherRef = useRef<HTMLDivElement>(null);

  const [viewPortDimensions, setViewPortDimensions] = useState<ViewPortDimensions>({ width: 0, height: 0 });
  const [catcherDimensions, setCatcherDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [catcherPosition, setCatcherPosition] = useState(0);
  const [score, setScore] = useState(0);
  const [fallingItemsRender, setFallingItemsRender] = useState<FallingExperienceItem[]>([]);
  const [catcherAscii, setCatcherAscii] = useState<string>(" |______________________|");

  const [gameSettings, setGameSettings] = useState<GameSettings>({
    fallSpeed: 20,
    catcherSpeed: 50,
    frameIntervalMs: 100,
    spawnIntervalMs: 1000,
    catcherFontSize: 30,
    fallingTextFontSize: 30,
    padding: 5,
  });

  
  const fallingTexts = ["1111111111", "2222222222", "3333333333"];
  const defaultExperienceProgressItems = fallingTexts.map((fallingText) => {return {count: 0, text: fallingText}})
  const [experienceProgressItems, setExperienceProgressItems] = useState<ExperienceProgressItems[]>(defaultExperienceProgressItems);

  const itemsRef = useRef<FallingExperienceItem[]>([]);
  const catcherPositionRef = useRef(catcherPosition);
  
  const measureTextWidth = (text: string, font: string) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return 0;
    ctx.font = font;
    return ctx.measureText(text).width;
  };

  useEffect(() => {
    catcherPositionRef.current = catcherPosition;
  }, [catcherPosition]);

  // Find text length
  useEffect(() => {
    if (viewPortRef.current) {
      const padding = viewPortRef.current.offsetWidth * 0.005;
      setGameSettings(prev => ({ ...prev, padding }));
    }
  }, [viewPortDimensions.width]);

  // Fetch ASCII art catcher
  useEffect(() => {
    const getAsciiArt = async () => {
      const res = await fetch("/info/ascii/interactiveModeAsciiArt/defaultCatcher.txt");
      const text = await res.text();
      setCatcherAscii(text || " |______________________|");
    };
    getAsciiArt();
  }, []);

  // Spawn falling items
  useEffect(() => {
    const spawnInterval = setInterval(() => {
      if (!viewPortRef.current) return;
      const id = Math.random().toString(36).substring(2, 9);
      const text = fallingTexts[Math.floor(Math.random() * fallingTexts.length)];
      const font = `${gameSettings.fallingTextFontSize}px monospace`;
      const width = measureTextWidth(text, font);
      const left = Math.random() * (viewPortRef.current.offsetWidth - width + gameSettings.padding);
      itemsRef.current.push({ id, position: { left, top: 0 }, text, width });
    }, 1000);
    return () => clearInterval(spawnInterval);
  }, []);

  // Update dimensions
  useEffect(() => {
    const updateDims = () => {
      if (viewPortRef.current) {
        setViewPortDimensions({
          width: viewPortRef.current.offsetWidth,
          height: viewPortRef.current.offsetHeight,
        });
      }
      if (catcherRef.current) {
        const rect = catcherRef.current.getBoundingClientRect();
        setCatcherDimensions({
          width: rect.width,
          height: rect.height,
        });
      }
    };
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, [catcherAscii]);

  // Handle catcher movement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setCatcherPosition((prev) => {
        if (e.key === "ArrowLeft") return Math.max(0, prev - gameSettings.catcherSpeed);
        if (e.key === "ArrowRight") return Math.min(viewPortDimensions.width - catcherDimensions.width, prev + gameSettings.catcherSpeed);
        return prev;
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewPortDimensions.width, catcherDimensions.width]);

  useEffect(() => {
    let rafId: number;
    let lastTime = 0;
    const linesCount = catcherAscii.split("\n").length;
    const fontSize = gameSettings.catcherFontSize;
    const catcherHeight = linesCount * fontSize;

    const animate = (time: number) => {
      if (time - lastTime >= gameSettings.frameIntervalMs) {
        lastTime = time;

        const catcherLeft = catcherPositionRef.current;
        const catcherRight = catcherLeft + catcherDimensions.width;
        const catcherTop = viewPortDimensions.height - catcherHeight;

        let caughtThisFrame = 0;

        itemsRef.current = itemsRef.current.filter(item => {
          const nextTop = item.position.top + gameSettings.fallSpeed;
          const itemLeft = item.position.left;
          const itemRight = itemLeft + item.width;
          

          const horizontalOverlap = itemLeft < catcherRight && itemRight > catcherLeft;
          const verticalOverlap = nextTop >= catcherTop;

          if (horizontalOverlap && verticalOverlap) {
            caughtThisFrame++;
            setExperienceProgressItems((prev) => 
              prev.map((experienceProgressItem) => 
                experienceProgressItem.text === item.text ? {...experienceProgressItem, count: experienceProgressItem.count + 1} : experienceProgressItem
              )
            )
            return false;
          }

          if (nextTop > viewPortDimensions.height) return false;
          item.position.top = nextTop;
          return true;
        });

        if (caughtThisFrame > 0) setScore(prev => prev + caughtThisFrame);
        setFallingItemsRender([...itemsRef.current]);
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [viewPortDimensions.height, catcherDimensions.width, catcherAscii]);

  return (
    <div style={{height: '100%', display: 'flex'}}>
    <div
      ref={viewPortRef}
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ fontSize: "30px" }}>Score: {score}</div>

      {fallingItemsRender.map(item => (
        <div
          key={item.id}
          style={{
            position: "absolute",
            top: item.position.top,
            left: item.position.left,
            fontSize: gameSettings.fallingTextFontSize,
            fontFamily: "monospace",
            whiteSpace: "pre",
          }}
        >
          {item.text}
        </div>
      ))}

      <div
        ref={catcherRef}
        style={{
          position: "absolute",
          left: catcherPosition,
          bottom: 0,
          fontFamily: "monospace",
          fontSize: gameSettings.catcherFontSize,
          whiteSpace: "pre",
          lineHeight: "1em",
        }}
      >
        {catcherAscii}
      </div>
    </div>
    
      <ProgressSideBar experienceProgressItems={experienceProgressItems}/>
      </div>
  );
}