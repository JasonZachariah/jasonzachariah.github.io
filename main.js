
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

// Scrollspy for sidebar navigation
function initScrollspy() {
  // Find all sidebar links
  const sidebarLinks = document.querySelectorAll('.sidebar-border a[href^="#"]');
  
  // If no sidebar links found, exit
  if (sidebarLinks.length === 0) return;
  
  // Get all sections that have IDs matching the sidebar links
  const sections = Array.from(sidebarLinks).map(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = document.querySelector(href);
      return section ? { link, section } : null;
    }
    return null;
  }).filter(item => item !== null);
  
  // If no sections found, exit
  if (sections.length === 0) return;
  
  // Add sidebar-link class to all sidebar links for styling
  sidebarLinks.forEach(link => {
    link.classList.add('sidebar-link');
  });
  
  // Function to update active link based on scroll position
  function updateActiveLink() {
    let activeSection = null;
    let maxVisibility = -1;
    
    // Find the section that's most visible in the viewport
    sections.forEach(({ section }) => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the section is visible in the upper portion of viewport
      const topVisible = Math.max(0, viewportHeight * 0.2 - rect.top);
      const bottomVisible = Math.max(0, rect.bottom - viewportHeight * 0.2);
      const visibleHeight = Math.min(topVisible, bottomVisible, rect.height);
      const visibility = visibleHeight / rect.height;
      
      // Prefer sections that are in the upper portion of viewport
      if (rect.top <= viewportHeight * 0.3 && rect.bottom >= viewportHeight * 0.1) {
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          activeSection = section;
        }
      }
    });
    
    // If no section is in the preferred area, find the closest one
    if (!activeSection) {
      let closestDistance = Infinity;
      sections.forEach(({ section }) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight * 0.2);
        if (distance < closestDistance && rect.top < window.innerHeight) {
          closestDistance = distance;
          activeSection = section;
        }
      });
    }
    
    // Update active class
    sidebarLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    if (activeSection) {
      const id = activeSection.getAttribute('id');
      if (id) {
        const correspondingLink = Array.from(sidebarLinks).find(link => {
          const href = link.getAttribute('href');
          return href === `#${id}`;
        });
        
        if (correspondingLink) {
          correspondingLink.classList.add('active');
        }
      }
    } else if (window.scrollY < 100) {
      // If at top of page, highlight first section
      const firstLink = sidebarLinks[0];
      if (firstLink) {
        firstLink.classList.add('active');
      }
    }
  }
  
  // Update on scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Initial update
  updateActiveLink();
}

// Initialize scrollspy when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollspy);
} else {
  initScrollspy();
}

