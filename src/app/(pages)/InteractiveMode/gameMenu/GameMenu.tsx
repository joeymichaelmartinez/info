import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import style from "./GameMenu.module.css";
import InputFunctionHints from "@/app/components/inputHints/InputHints";
import useDeviceType from "@/app/utils/deviceType/useDeviceType";

interface GameMenuProps {
  setShowGameMenu: Dispatch<SetStateAction<boolean>>
}

export default function GameMenu({setShowGameMenu} : GameMenuProps) {
  const deviceType = useDeviceType();
  return (
    <div className={style.startMenu}>
      <span className={style.menuText}>Welcome to Joey&apos;s experience Builder!</span>
      <span className={style.menuText}>Try to collect all of the falling items!</span>
      <span className={style.menuText}>Each one represents a skill, project, or experience!</span>
      <span className={style.menuText}>{
        deviceType === "mobile" ? 
          "Press the arrow buttons to move the catcher to collect the different items!" :
          "Use ← → to move the catcher to collect the different items!"
        }
      </span>
      <Button className={style.startButton} onClick={() => setShowGameMenu(false)}>Start</Button>
    </div>
  );
}