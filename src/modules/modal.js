const modal = () => {
	const popupBtns = document.querySelectorAll(".popup-btn");
	const modal = document.querySelector(".popup");
	const modalClose = document.querySelector(".popup-close");
	let positionX = -250;
	let idAnimation;

	const menuAnimationOn = () => {
		idAnimation = requestAnimationFrame(menuAnimationOn);
		if (positionX < 0) {
			positionX += 8;
			modal.style.transform = `translateX(${positionX}%)`;
		}
	};

	popupBtns.forEach((item) => {
		item.addEventListener("click", () => {
			modal.style.display = "block";
			menuAnimationOn();
		});
	});

	modalClose.addEventListener("click", () => {
		modal.style.display = "none";
		positionX = -250;
		cancelAnimationFrame(idAnimation);
	});

	console.log("modal.js is loaded");
};

export default modal;
