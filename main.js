import { animate, svg, stagger } from 'animejs';

animate(svg.createDrawable('.line'), {
  draw: ['0 1'],
  ease: 'inOutQuad',
  duration: 2000,
  delay: stagger(100),
  
});