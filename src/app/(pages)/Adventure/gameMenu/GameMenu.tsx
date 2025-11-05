import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import style from "./GameMenu.module.css";

interface GameMenuProps {
  setShowGameMenu: Dispatch<SetStateAction<boolean>>
}

export default function GameMenu({setShowGameMenu} : GameMenuProps) {
  return (
    <div className={style.startMenu}>
      <span className={style.menuText}>Welcome to Joey's experience Builder!</span>
      <span className={style.menuText}>Try to collect all of the falling items!</span>
      <span className={style.menuText}>Each one represents a skill, project, or experience!</span>
      <Button className={style.startButton} onClick={() => setShowGameMenu(false)}>Start</Button>
    </div>
  );
}