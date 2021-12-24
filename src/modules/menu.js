const menu = () => {
	const menuBtn = document.querySelector(".menu");
	const menu = document.querySelector("menu");
	const closeBtn = menu.querySelector(".close-btn");
	const menuItems = menu.querySelectorAll("ul>li>a");
	let positionX = -100;
	let idAnimation;

	const handleMenu = () => {
		if (window.screen.width >= 768) {
			cancelAnimationFrame(idAnimation);
			if (!menu.style.transform) {
				menuAnimationOn();
			} else {
				menuAnimationOff();
			}
		} else if (window.screen.width < 768) {
			if (!menu.style.transform) {
				menu.style.transform = "translateX(100%)";
			} else {
				menu.style.transform = "";
			}
		}
	};
	const menuAnimationOn = () => {
		idAnimation = requestAnimationFrame(menuAnimationOn);
		if (positionX < 100) {
			positionX += 8;
			menu.style.transform = `translateX(${positionX}%)`;
		}
	};
	const menuAnimationOff = () => {
		positionX = -100;
		menu.style.transform = "";
	};

	menuBtn.addEventListener("click", (event) => {
		event.preventDefault();
		handleMenu();
	});
	closeBtn.addEventListener("click", (event) => {
		event.preventDefault();
		handleMenu();
	});
	menuItems.forEach((item) => item.addEventListener("click", handleMenu));

	console.log("menu.js is loaded");
};

export default menu;
