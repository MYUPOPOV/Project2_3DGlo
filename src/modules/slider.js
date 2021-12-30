const slider = (portfolioContent, portfolioItem, classPortfolioActive, classDotActive) => {
	const sliderBlock = document.querySelector(`.${portfolioContent}`);
	const slides = document.querySelectorAll(`.${portfolioItem}`);
	let dots;
	let sliderTimeInterval = 2000;
	let currentSlide = 0;
	let intervalId;

	const checkArguments = () => {
		if (!document.querySelector(`.${portfolioContent}`) || !document.querySelector(`.${portfolioItem}`) || !document.querySelector(`.${classPortfolioActive}`) || classDotActive !== 'dot-active') {
			alert('ОШИБКА: Модуль slider() не запущен => проверьте аргументы функции slider() в index.js');
			return;
		} else {
			renderDots();
			startSlide(sliderTimeInterval);
			addListeners();
		}
	};

	const renderDots = (classDotActive = 'dot-active') => {
		slides.forEach((item, index) => {
			const allDots = document.querySelector('.portfolio-dots');
			const newLi = document.createElement('li');
			newLi.classList.add('dot');
			if (index === 0) {
				newLi.classList.add(classDotActive);
			}
			allDots.append(newLi);
		});
		dots = document.querySelectorAll('.dot');
	};

	const prevSlide = (elems, index, strClass) => {
		elems[index].classList.remove(strClass);
	};

	const nextSlide = (elems, index, strClass) => {
		elems[index].classList.add(strClass);
	};

	const autoSlide = () => {
		prevSlide(slides, currentSlide, classPortfolioActive);
		prevSlide(dots, currentSlide, classDotActive);
		currentSlide++;
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		nextSlide(slides, currentSlide, classPortfolioActive);
		nextSlide(dots, currentSlide, classDotActive);
	};

	const startSlide = (timer = 1000) => {
		intervalId = setInterval(autoSlide, timer);
	};

	const stopSlide = () => {
		clearInterval(intervalId);
	};

	const addListeners = () => {
		sliderBlock.addEventListener('click', (e) => {
			e.preventDefault();

			if (!e.target.matches('.dot, .portfolio-btn')) {
				return;
			}

			prevSlide(slides, currentSlide, classPortfolioActive);
			prevSlide(dots, currentSlide, classDotActive);

			if (e.target.matches('#arrow-right')) {
				currentSlide++;
			} else if (e.target.matches('#arrow-left')) {
				currentSlide--;
			} else if (e.target.classList.contains('dot')) {
				dots.forEach((dot, index) => {
					if (e.target === dot) {
						currentSlide = index;
					}
				});
			}

			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}
			if (currentSlide < 0) {
				currentSlide = slides.length - 1;
			}

			nextSlide(slides, currentSlide, classPortfolioActive);
			nextSlide(dots, currentSlide, classDotActive);
		});

		sliderBlock.addEventListener(
			'mouseenter',
			(e) => {
				if (e.target.matches('.dot, .portfolio-btn')) {
					stopSlide();
				}
			},
			true
		);

		sliderBlock.addEventListener(
			'mouseleave',
			(e) => {
				if (e.target.matches('.dot, .portfolio-btn')) {
					startSlide(sliderTimeInterval);
				}
			},
			true
		);
	};

	checkArguments();
};

export default slider;
