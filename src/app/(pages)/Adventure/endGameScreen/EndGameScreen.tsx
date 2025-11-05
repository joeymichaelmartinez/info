import { Button } from "@/components/ui/button";
import style from "./EndGameScreen.module.css"

interface EndGameScreenProps {
  win: boolean,
  handleRestart: () => void
}

export default function EndGameScreen({ win, handleRestart }: EndGameScreenProps) {
  return (
    <div className={style.endGameScreen}>
      {win ? 
        <div className={style.endGameScreenText}>
            Congratulations! You collected all of Joey's skills and experiences! 🎉
        </div> :
        <div className={style.endGameScreenText}>
          Unfortunately, you missed some items! Press restart to try again!
        </div>
      }
      <Button className={style.restartButton} onClick={() => handleRestart()}>Restart</Button>
    </div>
  );
}