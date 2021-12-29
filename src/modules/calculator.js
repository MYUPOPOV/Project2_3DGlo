const calculator = (price = 100) => {
	const calcBlock = document.querySelector('.calc-block');
	const calcType = document.querySelector('.calc-type');
	const calcSquare = document.querySelector('.calc-square');
	const calcCount = document.querySelector('.calc-count');
	const calcDay = document.querySelector('.calc-day');
	const total = document.getElementById('total');

	const array = [calcSquare, calcCount, calcDay];
	array.forEach((item) => {
		item.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/\D+/, '');
		});
	});

	const totalAnimation = (totalStart, totalEnd) => {
		if (totalEnd > totalStart) {
			setTimeout(() => {
				totalStart += 10;
				total.textContent = totalStart;
				totalAnimation(totalStart, totalEnd);
			}, 1);
		} else if (totalEnd < totalStart) {
			total.textContent = totalEnd;
		}
	};

	const countCalc = () => {
		const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
		const calcSquareValue = calcSquare.value;
		let totalValue = 0;
		let calcCountValue = 1;
		let calcDayValue = 1;

		if (calcCount.value > 1) {
			calcCountValue += +calcCount.value / 10;
		}
		if (calcDay.value && calcDay.value < 5) {
			calcDayValue = 2;
		} else if (calcDay.value && calcDay.value < 10) {
			calcDayValue = 1.5;
		}
		if (calcTypeValue && calcSquareValue) {
			totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
		}
		totalAnimation(0, totalValue);
	};

	calcBlock.addEventListener('input', (e) => {
		if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
			countCalc();
		}
	});
};

export default calculator;
