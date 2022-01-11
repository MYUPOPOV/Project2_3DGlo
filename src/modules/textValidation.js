/*jshint esversion: 6 */

const textValidation = () => {
	/* Главная страница */
	const form1Name = document.getElementById('form1-name');
	const form1Email = document.getElementById('form1-email');
	const form1Phone = document.getElementById('form1-phone');
	/* Модальное окно */
	const form3Name = document.getElementById('form3-name');
	const form3Phone = document.getElementById('form3-phone');
	const form3Email = document.getElementById('form3-email');
	/* Остались вопросы? */
	const form2Name = document.getElementById('form2-name');
	const form2Email = document.getElementById('form2-email');
	const form2Phone = document.getElementById('form2-phone');
	const form2Message = document.getElementById('form2-message');

	/* Функция форматирования Полей ввода type=text и placeholder="Ваше имя"  */
	const textFormFormat = function () {
		this.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^а-яА-Я ]/, '');
		});
		this.addEventListener('blur', (e) => {
			e.target.value = e.target.value.replace(/[^а-яА-Я- ]+/, '');
			e.target.value = e.target.value.replace(/\s+/, ' ');
			e.target.value = e.target.value.replace(/^[-\s]+/, '');
			e.target.value = e.target.value.replace(/[-\s]+$/, '');
			e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLowerCase();
		});
	};

	/* Функция форматирования Полей ввода type=text и placeholder="Ваше сообщение"  */
	const messageFormFormat = function () {
		this.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^а-яА-Я0-9-.,;:!? ]/, '');
		});
		this.addEventListener('blur', (e) => {
			e.target.value = e.target.value.replace(/[^а-яА-Я0-9- ]+/, '');
			e.target.value = e.target.value.replace(/\s+/, ' ');
			e.target.value = e.target.value.replace(/^[-\s]+/, '');
			e.target.value = e.target.value.replace(/[-\s]+$/, '');
			e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLowerCase();
		});
	};
	/* Функция форматирования Полей ввода type=email  */
	const emailFormFormat = function () {
		this.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^a-zA-Z0-9\-@_.!~\*']/, '');
		});
		this.addEventListener('blur', (e) => {
			e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~\*']+/, '');
			e.target.value = e.target.value.replace(/\s+/, ' ');
			e.target.value = e.target.value.replace(/^[-\s]+/, '');
			e.target.value = e.target.value.replace(/[-\s]+$/, '');
		});
	};

	/* Функция форматирования Полей ввода type=tel  */
	const telFormFormat = function () {
		this.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^0-9()-+]/, '');
		});
		this.addEventListener('blur', (e) => {
			e.target.value = e.target.value.replace(/[^0-9()-+]+/, '');
			e.target.value = e.target.value.replace(/\s+/, ' ');
			e.target.value = e.target.value.replace(/^[-\s]+/, '');
			e.target.value = e.target.value.replace(/[-\s]+$/, '');
		});
	};

	[form1Name, form2Name, form3Name].forEach((item) => textFormFormat.bind(item)());
	messageFormFormat.bind(form2Message)();
	[form1Email, form2Email, form3Email].forEach((item) => emailFormFormat.bind(item)());
	[form1Phone, form2Phone, form3Phone].forEach((item) => telFormFormat.bind(item)());
};

export default textValidation;
