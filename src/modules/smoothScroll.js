const smoothScroll = () => {
	const scrollBtn = document.querySelector('[href = "#service-block"]');
	const serviceBlock = document.getElementById("service-block");
	const menuItems = document.querySelectorAll("menu>ul>li>a");
	let idAnimation;
	let distanceToTop;

	const scrollUp = function (object) {
		const objectBlockScrollUp = scrollUp.bind(object);
		idAnimation = requestAnimationFrame(() => {
			objectBlockScrollUp(object);
		});
		distanceToTop = this.getBoundingClientRect().top;
		if (distanceToTop > 200) {
			window.scrollBy(0, 50);
		} else if (distanceToTop > 100) {
			window.scrollBy(0, 20);
		} else if (distanceToTop > 50) {
			window.scrollBy(0, 5);
		} else if (distanceToTop > 30) {
			window.scrollBy(0, 3);
		} else if (distanceToTop > 20) {
			window.scrollBy(0, 2);
		} else if (distanceToTop > 0) {
			window.scrollBy(0, 1);
		} else if (distanceToTop <= 0) {
			cancelAnimationFrame(idAnimation);
		}
	};

	scrollBtn.addEventListener("click", (event) => {
		event.preventDefault();
		const serviceBlockScrollUp = scrollUp.bind(serviceBlock);
		serviceBlockScrollUp(serviceBlock);
	});

	menuItems.forEach((item) => {
		const itemLink = document.getElementById(`${item.getAttribute("href").substring(1)}`);
		item.addEventListener("click", (event) => {
			event.preventDefault();
			const itemScrollUp = scrollUp.bind(itemLink);
			itemScrollUp(itemLink);
		});
	});

	console.log("smoothScroll.js is loaded");
};

export default smoothScroll;
