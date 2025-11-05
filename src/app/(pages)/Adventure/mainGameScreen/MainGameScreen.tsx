import { useEffect, useRef, useState } from "react";
import ProgressSideBar from "../progressSideBar/ProgressSideBar";
import EndGameScreen from "../endGameScreen/EndGameScreen";
import useDeviceType from "@/app/utils/deviceType/useDeviceType";
import { useBackButton } from "@/app/utils/navigation/BackButtonContext";

interface ViewPortDimensions {
  width: number;
  height: number;
}

type Category = "Skills" | "Projects" | "Experience";

interface FallingExperienceItem {
  id: string;
  text: string;
  category: Category;
  position: { left: number; top: number };
  width: number;
}

export interface ExperienceProgressItems {
  count: number;
  text: string;
}

interface GameSettings {
  fallSpeed: number;
  catcherSpeed: number;
  catcherFontSize: number;
  fallingTextFontSize: number;
  frameIntervalMs: number;
  spawnIntervalMs: number;
  padding: number;
}

export default function Adventure() {
  const viewPortRef = useRef<HTMLDivElement>(null);
  const catcherRef = useRef<HTMLDivElement>(null);
  const deviceType = useDeviceType();
  const { setHide } = useBackButton();

  const [viewPortDimensions, setViewPortDimensions] = useState<ViewPortDimensions>({ width: 0, height: 0 });
  const [catcherDimensions, setCatcherDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [catcherPosition, setCatcherPosition] = useState(0);
  const [fallingItemsRender, setFallingItemsRender] = useState<FallingExperienceItem[]>([]);
  const [catcherAscii, setCatcherAscii] = useState<string>("|______________________|");
  const [missedItems, setMissedItems] = useState<FallingExperienceItem[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWinState, setGameWinState] = useState(false);

  const [gameSettings] = useState<GameSettings>({
    fallSpeed: 20,
    catcherSpeed: window.innerWidth > 1024 ? 50 : 10,
    frameIntervalMs: 100,
    spawnIntervalMs: 800,
    catcherFontSize: window.innerWidth > 1024 ? 30 : 10,
    fallingTextFontSize: window.innerWidth > 1024 ? 30 : 15,
    padding: window.innerWidth > 1024 ? 5 : 0,
  });

  // Game items by category
  const gameCategories: Record<Category, string[]> = {
    Skills: ["React", "TypeScript", "Node.js", "Python", "GraphQL", "Java", "Next.js", "Spring Boot", "PostgreSQL", "MongoDB", "Docker", "AWS", "MySQL", "MongoDB"],
    Projects: ["Space Listings", "Mini ERP Project", "AI Maze Solving", "Web Front End Design", "Interrobang", "Chromophony"],
    Experience: ["AT&T - TEKsystems", "Smile Brands Inc.", "Meta", "Vero", "Rocket Software, Inc.", "Rezerv"],
  };

  const allFallingItems: { text: string; category: Category }[] = Object.entries(gameCategories).flatMap(
    ([category, items]) => items.map(text => ({ text, category: category as Category }))
  );

  const initialProgress = () => {
    const initial: Record<Category, ExperienceProgressItems[]> = { Skills: [], Projects: [], Experience: [] };
    for (const category in gameCategories) {
      const key = category as Category;
      initial[key] = gameCategories[key].map(text => ({ text, count: 0 }));
    }
    return initial;
  };
  const [progressByCategory, setProgressByCategory] = useState<Record<Category, ExperienceProgressItems[]>>(initialProgress());

  const itemsRef = useRef<FallingExperienceItem[]>([]);
  const catcherPositionRef = useRef(catcherPosition);
  const spawnIndexRef = useRef(0);

  const measureTextWidth = (text: string, font: string) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return 0;
    ctx.font = font;
    return ctx.measureText(text).width;
  };

  // Keep catcher ref in sync
  useEffect(() => {
    catcherPositionRef.current = catcherPosition;
  }, [catcherPosition]);

  // Fetch ASCII catcher and measure its width after load
  useEffect(() => {
    const getAsciiArt = async () => {
      const catcherAsciiArtUrl =
        window.innerWidth < 768
          ? '/info/ascii/interactiveModeAsciiArt/mobileCatcher.txt'
          : '/info/ascii/interactiveModeAsciiArt/defaultCatcher.txt';
      const res = await fetch(catcherAsciiArtUrl);
      const text = await res.text();
      setCatcherAscii(text || "|______________________|");

      // Measure width after ASCII loads
      setTimeout(() => {
        if (!catcherRef.current) return;
        const rect = catcherRef.current.getBoundingClientRect();
        setCatcherDimensions({ width: rect.width, height: rect.height });
        const maxLeft = Math.max(0, viewPortDimensions.width - rect.width);
        setCatcherPosition(prev => Math.min(prev, maxLeft));
      }, 50);
    };
    getAsciiArt();
  }, [viewPortDimensions.width]);

  // Resize viewport and re-measure catcher
  useEffect(() => {
    const updateDims = () => {
      if (!viewPortRef.current) return;
      setViewPortDimensions({ width: viewPortRef.current.offsetWidth, height: viewPortRef.current.offsetHeight });
      if (!catcherRef.current) return;
      const rect = catcherRef.current.getBoundingClientRect();
      setCatcherDimensions({ width: rect.width, height: rect.height });
      const maxLeft = Math.max(0, viewPortRef.current.offsetWidth - rect.width);
      setCatcherPosition(prev => Math.min(prev, maxLeft));
    };
    window.addEventListener("resize", updateDims);
    updateDims();
    return () => window.removeEventListener("resize", updateDims);
  }, [catcherAscii, gameSettings.catcherFontSize]);

  // Catcher key handling
  const keysPressedRef = useRef<{ left: number | null; right: number | null }>({ left: null, right: null });
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const now = performance.now();
      if (e.key === "ArrowLeft" && keysPressedRef.current.left === null) keysPressedRef.current.left = now;
      if (e.key === "ArrowRight" && keysPressedRef.current.right === null) keysPressedRef.current.right = now;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") keysPressedRef.current.left = null;
      if (e.key === "ArrowRight") keysPressedRef.current.right = null;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const STEP_INTERVAL = 80;
    let lastTime = 0;

    const stepCatcher = (time: number) => {
      if (lastTime === 0) lastTime = time;

      if (time - lastTime >= STEP_INTERVAL) {
        lastTime = time;

        setCatcherPosition(prev => {
          if (!catcherDimensions.width || !viewPortDimensions.width) return prev;
          let newPos = prev;

          const computeStep = (keyTime: number | null) => {
            if (!keyTime) return 0;
            const now = performance.now();
            const held = now - keyTime;
            const BASE_SPEED = 25;
            const ACCEL_DELAY = 400;
            const MAX_SPEED = 100;
            const ACCEL_RATE = 0.15;
            const base = held > ACCEL_DELAY
              ? Math.min(MAX_SPEED, BASE_SPEED + (held - ACCEL_DELAY) * ACCEL_RATE)
              : BASE_SPEED;
            return (base * gameSettings.catcherSpeed) / 50;
          };

          const maxRight = viewPortDimensions.width - catcherDimensions.width;

          if (keysPressedRef.current.right && prev < maxRight) {
            newPos += computeStep(keysPressedRef.current.right);
            if (newPos > maxRight) newPos = maxRight;
          }

          if (keysPressedRef.current.left && prev > 0) {
            newPos -= computeStep(keysPressedRef.current.left);
            if (newPos < 0) newPos = 0;
          }

          catcherPositionRef.current = newPos;
          return newPos;
        });
      }

      requestAnimationFrame(stepCatcher);
    };

    const rafId = requestAnimationFrame(stepCatcher);
    return () => cancelAnimationFrame(rafId);
  }, [viewPortDimensions.width, catcherDimensions.width]);

  // Spawn falling items
  useEffect(() => {
    if (gameOver || gameWinState) return;
    const spawnInterval = setInterval(() => {
      if (!viewPortRef.current) return;
      if (spawnIndexRef.current >= allFallingItems.length) {
        clearInterval(spawnInterval);
        return;
      }
      const { text, category } = allFallingItems[spawnIndexRef.current++];
      const id = Math.random().toString(36).substring(2, 9);
      const font = `${gameSettings.fallingTextFontSize}px monospace`;
      const width = measureTextWidth(text, font);
      const left = Math.random() * (viewPortRef.current.offsetWidth - width + gameSettings.padding);
      itemsRef.current.push({ id, text, category, position: { top: 0, left }, width });
    }, gameSettings.spawnIntervalMs);

    return () => clearInterval(spawnInterval);
  }, [gameOver, gameWinState]);

  // Falling animation & catching
  useEffect(() => {
    let rafId: number;
    let lastTime = 0;
    const catcherHeight = catcherDimensions.height || (catcherAscii.split("\n").length * gameSettings.catcherFontSize);

    const animate = (time: number) => {
      if (gameOver || gameWinState) return;

      if (time - lastTime >= gameSettings.frameIntervalMs) {
        lastTime = time;

        const catcherLeft = catcherPositionRef.current;
        const catcherRight = catcherLeft + catcherDimensions.width;
        const catcherTop = viewPortDimensions.height - catcherHeight;

        itemsRef.current = itemsRef.current.filter(item => {
          const nextTop = item.position.top + gameSettings.fallSpeed;
          const horizontalOverlap = item.position.left < catcherRight && (item.position.left + item.width) > catcherLeft;
          const verticalOverlap = nextTop >= catcherTop;

          if (horizontalOverlap && verticalOverlap) {
            setProgressByCategory(prev => ({
              ...prev,
              [item.category]: prev[item.category].map(exp =>
                exp.text === item.text ? { ...exp, count: exp.count + 1 } : exp
              ),
            }));
            return false;
          }

          if (nextTop > viewPortDimensions.height) {
            setMissedItems(prev => [...prev, item]);
            return false;
          }

          item.position.top = nextTop;
          return true;
        });

        setFallingItemsRender([...itemsRef.current]);

        if (spawnIndexRef.current >= allFallingItems.length && itemsRef.current.length === 0 && missedItems.length === 0) {
          setGameWinState(true);
        }

        if (spawnIndexRef.current >= allFallingItems.length && itemsRef.current.length === 0 && missedItems.length > 0) {
          setGameOver(true);
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [viewPortDimensions.height, catcherDimensions.width, catcherAscii, gameWinState, gameOver, missedItems]);

  useEffect(() => {
    // Hide back button when the game mounts
    setHide(true);

    // Show it again when the game unmounts
    return () => setHide(false);
  }, [setHide]);


  const handleRestart = () => {
    setGameWinState(false);
    setGameOver(false);
    setMissedItems([]);
    spawnIndexRef.current = 0;
    itemsRef.current = [];
    setProgressByCategory(initialProgress());
  };

  return (
     <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
          height: "100%",
        }}
      >
      <div ref={viewPortRef} style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        {gameWinState || gameOver ? (
          <EndGameScreen win={gameWinState} handleRestart={handleRestart} />
        ) : (
          fallingItemsRender.map(item => (
            <div key={item.id} style={{ 
              position: "absolute", 
              top: item.position.top, 
              left: item.position.left, 
              fontSize: gameSettings.fallingTextFontSize, 
              fontFamily: "monospace", whiteSpace: "pre" 
            }}>
              {item.text}
            </div>
          ))
        )}

        <div 
          ref={catcherRef} 
          style={{ 
            position: "absolute", 
            left: `${catcherPosition}px`, 
            bottom: 0, 
            fontFamily: "monospace", 
            fontSize: gameSettings.catcherFontSize, 
            whiteSpace: "pre", 
            lineHeight: "1em" 
          }}
        >
          {catcherAscii}
        </div>

        {deviceType === "mobile" && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-evenly",
              gap: '50%',
              zIndex: 100,
            }}
          >
            <button
              onTouchStart={() => (keysPressedRef.current.left = performance.now())}
              onTouchEnd={() => (keysPressedRef.current.left = null)}
              style={{
                width: "80px",
                height: "80px",
                fontSize: "24px",
                borderRadius: "50%",
                backgroundColor: "#333",
                color: "white",
                opacity: '40%'
              }}
            >
              {'\<'}
            </button>
            <button
              onTouchStart={() => (keysPressedRef.current.right = performance.now())}
              onTouchEnd={() => (keysPressedRef.current.right = null)}
              style={{
                width: "80px",
                height: "80px",
                fontSize: "24px",
                borderRadius: "50%",
                backgroundColor: "#333",
                color: "white",
                opacity: '40%'
              }}
            >
              {'\>'}
            </button>
          </div>
        )}
      </div>
      <ProgressSideBar progressByCategory={progressByCategory} />
    </div>
  );
}
