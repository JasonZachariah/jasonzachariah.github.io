
import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";




import {
  Carousel,
  initTWE,
} from "tw-elements";

initTWE({ Carousel });

gsap.registerPlugin(DrawSVGPlugin) ;

let split = SplitText.create(".text", { 
  type: "words, chars",
  mask:"chars"
});

// now animate the characters in a staggered fashion
gsap.from(split.words, {

  ease: "expo.out",
  y: 10,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.2 ,// 0.05 seconds between each
  filter: "blur(10px)",
});


//draws all elements with the "draw-me" class applied with staggered start times 0.1 seconds apart
gsap.from(".line", {duration:1,stagger: 0.1, drawSVG: 0});




import Swup from 'swup';
const swup = new Swup();
//inject nav bar
/*
const  navbar = ` 
 <nav class="container">


            <div class="flex w-full  my-8  content-center justify-between">
                <a href="./">
                  <img src="./jzlogo.svg" width="45px">
                </a>
                <div class=" flex justify-end-safe space-x-6">
                    <a href="./">WORKS</a>
                    <a href="./play">PLAY</a>
                    <a href="./about">ABOUT</a>
                    <a href="./resume">RESUME</a>
                </div>
            </div>



        </nav>`;
        document.body.insertAdjacentHTML("afterbegin", navbar);


*/