const modal = () => {
	const popupBtns = document.querySelectorAll(".popup-btn");
	const modal = document.querySelector(".popup");
	const modalClose = document.querySelector(".popup-close");

	popupBtns.forEach((item) => {
		item.addEventListener("click", () => {
			modal.style.display = "block";
		});
	});

	modalClose.addEventListener("click", () => {
		modal.style.display = "none";
	});

	console.log("modal.js is loaded");
};

export default modal;
