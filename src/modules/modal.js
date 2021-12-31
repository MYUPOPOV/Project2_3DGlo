import { animate } from './helpers';

const modal = () => {
	const popupBtns = document.querySelectorAll('.popup-btn');
	const modal = document.querySelector('.popup');

	popupBtns.forEach((item) => {
		item.addEventListener('click', () => {
			modal.style.display = 'block';
			animate({
				duration: 700,
				timing(timeFraction) {
					return Math.pow(timeFraction, 2);
				},
				draw(progress) {
					modal.style.opacity = `${progress * 100}%`;
				},
			});
		});
	});

	modal.addEventListener('click', (e) => {
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
			modal.style.display = 'none';
		}
	});
};

export default modal;
