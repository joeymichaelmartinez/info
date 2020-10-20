import React from 'react';
import './style/GameDesign.css';

import MegaManBossScreen from "./assets/images/MegaManBossSelect.jpg";

function GameDesign() {
    return (
        <div id="GameDesign-Container">
            <img src={MegaManBossScreen} />
        </div>
    )
}

export default GameDesign;