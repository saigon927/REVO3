// Advantages blocks

let target = document.querySelector(".advantages__blocks-wrap");

const obserber = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const blocks = entry.target;
		if (entry.isIntersecting) {
			blocks.classList.add('visible');
		}
	});
})

obserber.observe(target);