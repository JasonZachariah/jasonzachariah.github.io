import { animate, svg, stagger } from 'animejs';

animate(svg.createDrawable('.line'), {
  draw: ['0.5 2'],
  ease: 'inOutQuad',
  
  
  duration: 2000,
  
  delay: stagger(100),

});

animate('.line',{
  delay:1500,
  fill: ['#89f336', '#000'], 
    duration: 200,


    easing: 'outElastic'
})

animate('#logo', {
   delay:1500,
    scale: [ 1.1, 1],
  
    duration: 1000,
    
    ease: 'outElastic', // ease applied between each keyframes if no ease defined
 
   
  });