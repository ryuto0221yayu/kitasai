"use strict";

  const BB = document.getElementById('Bb');

  const RB = document.getElementById('Rb');

  const HAKO = document.getElementById('hako');
  let dice;
    addEventListener(('keydown'), e => {
      dice = Math.floor(Math.random() * 5 + 1);
      console.log(dice);
      if (BB.classList.contains('ugoku') == true || RB.classList.contains('ugoku') == true){
        BB.classList.remove('ugoku');
        RB.classList.remove('ugoku');
        HAKO.classList.add('deru');
      }else if (dice == 2) {
        BB.classList.add('ugoku');
        HAKO.classList.remove('deru');
      } else {
        RB.classList.add('ugoku');
        HAKO.classList.remove('deru');
      }
    });

 
