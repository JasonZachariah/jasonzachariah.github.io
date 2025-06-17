
import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin) ;

let split = SplitText.create(".text", { 
  type: "words, chars",
  mask:"chars"
});

// now animate the characters in a staggered fashion
gsap.from(split.chars, {

  ease: "expo.out",
  y: 500,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.1 // 0.05 seconds between each
});


//draws all elements with the "draw-me" class applied with staggered start times 0.1 seconds apart
gsap.from(".line", {duration:1,stagger: 0.1, drawSVG: 0});


function initPageScripts() {
  console.log("Re-running page scripts");
  // re-initialize sliders, listeners, animations, etc.
}

import barba from '@barba/core';

barba.init({
  
    transitions: [{
        name: 'opacity-transition',
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0
          });
        },
        enter(data) {
          return gsap.from(data.next.container, {
            opacity: 0
          });
        }
      }]
      
  });

  