const modal = () => {
	const popupBtns = document.querySelectorAll('.popup-btn');
	const modal = document.querySelector('.popup');
	const modalClose = document.querySelector('.popup-close');
	let positionX = -100;
	let idAnimation;
	modal.style.display = 'block';
	modal.style.transform = `translateX(-100%)`;

	const menuAnimationOn = () => {
		idAnimation = requestAnimationFrame(menuAnimationOn);
		if (positionX < 0) {
			positionX += 10;
			modal.style.transform = `translateX(${positionX}%)`;
		}
	};

	popupBtns.forEach((item) => {
		item.addEventListener('click', menuAnimationOn);
	});

	modal.addEventListener('click', (e) => {
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
			cancelAnimationFrame(idAnimation);
			modal.style.transform = `translateX(-100%)`;
			positionX = -200;
		}
	});

	console.log('modal.js is loaded');
};

export default modal;
