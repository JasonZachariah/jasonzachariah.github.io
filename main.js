import { animate, svg, stagger } from 'animejs';
import { gsap } from "gsap";
    
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);


animate(svg.createDrawable('.line'), {
  draw: ['0.5 2'],
  ease: 'inOutQuad',
  
  
  duration: 2000,
  
  delay: stagger(100),

});

animate('.line',{
  delay:1500,
  fill: ['#FF', '#000'], 
    duration: 200,


    easing: 'outElastic'
})

animate('#logo', {
   delay:1500,
    scale: [ 1.1, 1],
  
    duration: 1000,
    
    ease: 'outElastic', // ease applied between each keyframes if no ease defined
 
   
  });



  let split;
  SplitText.create(".line", {
    type: "char,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit: (self) => {
      split = gsap.from(self.lines, {
        duration: 2,
        yPercent: 100,
        opacity: 0,
        stagger: 0.7,
        ease: "expo.out",
      });
      return split;
    }
  });

function setup() {
  split && split.revert();
  animation && animation.revert();
  split = SplitText.create(".text", {type:"chars"});
}
setup();
window.addEventListener("resize", setup);