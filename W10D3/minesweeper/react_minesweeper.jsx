import React from 'react';
import ReactDOM from 'react-dom'
import Game from './frontend/game';

document.addEventListener("DOMContentLoaded", () => {
    
    const main = document.getElementById('main');
    ReactDOM.render(<Game />, main);
})

// function Root() {
  
//     return <div>
//       <Game />
//     </div>
//   }
  
