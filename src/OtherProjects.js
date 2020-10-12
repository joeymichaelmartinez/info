import React from 'react';
import "./style/OtherProjects.css";
import Headshot from './assets/images/Headshot.jpg';

function OtherProjects() {
    return (
        <div>
            <img src={Headshot} className="Headshot" alt="Headshot"/>
            <h1>WORK IN PROGRESS</h1>
        </div>
    )
}

// const gra = function(min, max) {
//     return Math.random() * (max - min) + min;
// }
// const init = function(){
// 	let items = document.querySelectorAll('section');
// 	for (let i = 0; i < items.length; i++){
// 		items[i].style.background = randomColor({luminosity: 'light'});
// 	}
// 	cssScrollSnapPolyfill()
// }
// init();

export default OtherProjects;