const menu = () => {
	const menuBtn = document.querySelector(".menu");
	const menu = document.querySelector("menu");
	const closeBtn = menu.querySelector(".close-btn");
	const menuItems = menu.querySelectorAll("ul>li>a");

	const handleMenu = () => {
		if (!menu.style.transform) {
			menu.style.transform = "translateX(0)";
		} else {
			menu.style.transform = "";
		}
	};

	menuBtn.addEventListener("click", handleMenu);
	closeBtn.addEventListener("click", handleMenu);

	menuItems.forEach((item) => item.addEventListener("click", handleMenu));

	console.log("menu.js is loaded");
};

export default menu;
