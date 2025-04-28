import { animate, svg, stagger } from 'animejs';

animate(svg.createDrawable('.line'), {
  draw: ['0.5 2'],
  ease: 'inOutQuad',
  
    
  duration: 2000,
  
  delay: stagger(100),

});

animate('#logo', {
   delay:1500,
    scale: [ 1.2, 1],
  
    duration: 1000,
    
    ease: 'outElastic', // ease applied between each keyframes if no ease defined
 
   
  });