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

	/* Поля ввода type=text и placeholder="Ваше сообщение"  */
	form1Name.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, '');
	});
	form2Name.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, '');
	});
	form3Name.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, '');
	});
	form2Message.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, '');
	});

	/* Поля ввода type=email  */
	form1Email.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^a-zA-Z@-_.!~*']/, '');
	});
	form2Email.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^a-zA-Z@-_.!~*']/, '');
	});
	form3Email.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^a-zA-Z@-_.!~*']/, '');
	});

	/*  Поля ввода type=tel  */
	form1Phone.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^0-9()-]/, '');
	});
	form2Phone.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^0-9()-]/, '');
	});
	form3Phone.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^0-9()-]/, '');
	});
};

export default textValidation;
