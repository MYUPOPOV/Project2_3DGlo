const smoothScroll = () => {
	const scrollBtn = document.querySelector('[href = "#service-block"]');
	const serviceBlock = document.getElementById("service-block");
	let idAnimation;
	let distanceToTop;

	const scrollUp = () => {
		idAnimation = requestAnimationFrame(scrollUp);
		window.scrollBy(0, 10);

		distanceToTop = serviceBlock.getBoundingClientRect().top;
		if (distanceToTop <= 0) {
			cancelAnimationFrame(idAnimation);
		}
	};

	scrollBtn.addEventListener("click", (event) => {
		event.preventDefault();
		scrollUp();
	});

	console.log("smoothScroll.js is loaded");
};

export default smoothScroll;
