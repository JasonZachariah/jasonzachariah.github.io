
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";
  
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, RoughEase);


const names=["the Markhamite","Ux/UI designer at WizRobotics","education forward"]


let cursor = gsap.to ('.cursor' ,{opacity:0, ease : "circ.inOut",repeat :-1 
}
)

let mastertl = gsap.timeline({repeat:-1})

names.forEach(word => {

  let tl = gsap.timeline({repeat: 1, yoyo: true,repeatDelay:2})

  tl.to('.change' ,{ duration:2, text: word,})

  mastertl.add(tl)
  
});

