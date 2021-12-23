const smoothScroll = () => {
	const scrollBtn = document.querySelector("main>a");

	scrollBtn.addEventListener("click", (event) => {
		event.preventDefault();
		console.log("Поiхалы");
		window.scrollBy(0, 550);
	});

	console.log("smoothScroll.js is loaded");
};

export default smoothScroll;
