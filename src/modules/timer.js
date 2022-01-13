/*jshint esversion: 6 */

const timer = (deadline) => {
	const timerHours = document.getElementById('timer-hours');
	const timerMinutes = document.getElementById('timer-minutes');
	const timerSeconds = document.getElementById('timer-seconds');
	const timerAction = document.querySelector('.timer-action');

	const getTimeRemaining = () => {
		let dateStop = new Date(deadline).getTime();
		let dateNow = new Date().getTime();
		let timeRemaining = (dateStop - dateNow) / 1000;
		let days = Math.floor(timeRemaining / 3600 / 24);
		let hours = Math.floor((timeRemaining / 3600) % 24);
		let minutes = Math.floor((timeRemaining / 60) % 60);
		let seconds = Math.floor(timeRemaining % 60);
		return { timeRemaining, days, hours, minutes, seconds };
	};

	const checkTimeFormat = (item) => {
		if (item.toString().length < 2) {
			item = '0' + item;
		}
		return item;
	};

	const updateClock = () => {
		const getTime = getTimeRemaining();
		if (getTime.timeRemaining > 0) {
			timerAction.textContent = `До конца акции осталось ${getTime.days} дн.`;
			timerHours.textContent = checkTimeFormat(getTime.hours);
			timerMinutes.textContent = checkTimeFormat(getTime.minutes);
			timerSeconds.textContent = checkTimeFormat(getTime.seconds);
		} else {
			timerAction.textContent = `До конца акции осталось 0 дн.`;
			timerHours.textContent = '00';
			timerMinutes.textContent = '00';
			timerSeconds.textContent = '00';
			clearInterval(intervalID);
		}
	};

	const getTime = getTimeRemaining();
	timerAction.textContent = `До конца акции осталось ${getTime.days} дн.`;
	timerHours.textContent = checkTimeFormat(getTime.hours);
	timerMinutes.textContent = checkTimeFormat(getTime.minutes);
	timerSeconds.textContent = checkTimeFormat(getTime.seconds);
	const intervalID = setInterval(updateClock, 1000);
};

export default timer;
