import { animate, svg, stagger } from "animejs";
import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";


let split = SplitText.create(".text", { 
  type: "words, chars",
  mask:"chars"
});

// now animate the characters in a staggered fashion
gsap.from(split.chars, {
  duration: 1, 

  y: 100,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.1 // 0.05 seconds between each
});


animate(svg.createDrawable(".line"), {
  draw: ["0.5 2"],
  ease: "inOutQuad",

  duration: 2000,

  delay: stagger(100),
});

animate(".line", {
  delay: 1500,
  fill: ["#FF", "#000"],
  duration: 200,

  easing: "outElastic",
});

animate("#logo", {
  delay: 1500,
  scale: [1.1, 1],

  duration: 1000,

  ease: "outElastic", // ease applied between each keyframes if no ease defined
});

