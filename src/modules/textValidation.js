const textValidation = () => {
	console.log('textValidation.js is loaded');

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

	const textFormFormat = function (form) {
		form.value = form.value.replace(/[^а-яА-Я- ]/, '');
	};

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
		e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~\*']/, '');
	});
	form2Email.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~\*']/, '');
	});
	form3Email.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~\*']/, '');
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

	/* Усложненное задание */
	/* 1. Должны удаляться все символы, кроме допустимых. */
	/*   В поля ввода type=text и placeholder="Ваше сообщение" позволить ввод только кириллицы в любом регистре, дефиса и пробела.
  В поля ввода type=email позволить ввод только латиницы в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '
  (Собака , Дефис , Подчеркивание , Точка , Восклицательный знак , Тильда , Звездочка , Одинарная кавычка)   
  В поля ввода type=tel позволить ввод только цифр, круглых скобок и дефис */
	form1Name.addEventListener('blur', (e) => {
		e.target.value = e.target.value.replace(/[^а-яА-Я- ]+/, '');
	});

	/* 2. Несколько идущих подряд пробелов или дефисов должны заменяться на один. */
	form1Name.addEventListener('blur', (e) => {
		e.target.value = e.target.value.replace(/\s+/, ' ');
	});

	/* 3. Пробелы и дефисы в начале и конце значения должны удаляться. */
	form1Name.addEventListener('blur', (e) => {
		e.target.value = e.target.value.replace(/^[-\s]+/, '');
		e.target.value = e.target.value.replace(/[-\s]+$/, '');
	});

	/* 4. Для поля type=text Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные — к нижнему. */
	form1Name.addEventListener('blur', (e) => {
		const str = e.target.value;
		e.target.value = str[0].toUpperCase() + str.substr(1).toLowerCase();
	});
};

export default textValidation;
