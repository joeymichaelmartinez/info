"use client"
import { useState } from 'react';
import MainGameScreen from './mainGameScreen/MainGameScreen';
import GameMenu from './gameMenu/GameMenu';

export default function GameStateHandler() {
  const [showGameMenu, setShowGameMenu] = useState<boolean>(true);
  return (
    showGameMenu ? <GameMenu setShowGameMenu={setShowGameMenu}/> :
    <MainGameScreen />
  )
}