const smoothScroll = () => {
	const scrollBtn = document.querySelector('[href = "#service-block"]');
	const serviceBlock = document.getElementById("service-block");
	const menuItems = document.querySelectorAll("menu>ul>li>a");

	const scrollUp = function (object) {
		object.scrollIntoView({ block: "start", behavior: "smooth" });
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
