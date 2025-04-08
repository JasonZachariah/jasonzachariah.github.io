const animation_elements = document.querySelectorAll('.animate-on-scroll, .animate-top-down');
//checks all classes with animate-on-scroll
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
            //animation plays
			entry.target.classList.add('animate');
		} else {
			// this line makes it repeat , which i dont want: entry.target.classList.remove('animate');
		}
	})
}, {
    //needs the element to be 50% on screel
	threshold: 0.5
});

//checks all instances of animation_elements
for (let i = 0; i < animation_elements.length; i++) {
	const el = animation_elements[i];

	observer.observe(el);
}