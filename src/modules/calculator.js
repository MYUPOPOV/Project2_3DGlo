const calculator = () => {
	const calcSquare = document.querySelector('.calc-square');
	const calcCount = document.querySelector('.calc-count');
	const calcDay = document.querySelector('.calc-day');

	[(calcSquare, calcCount, calcDay)].forEach((item) => {
		item.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/\D+/, '');
		});
	});
};

export default calculator;
