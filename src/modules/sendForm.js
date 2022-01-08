const sendForm = ({ formId, someElem = [] }) => {
	const form = document.getElementById(formId);
	const statusBlock = document.createElement('div');
	const loadText = 'Загрузка...';
	const errorText = 'Ошибка...';
	const successText = 'Спасибо! Наш менеджер с вами свяжется';

	const validate = (list) => {
		let success = true;

		list.forEach((input) => {
			if (
				(input.name === 'user_phone' && /^[\d+()-]+$/.test(input.value)) ||
				(input.name === 'user_name' && /^[а-яА-Я ]+$/.test(input.value)) ||
				(input.name === 'user_message' && /^[а-яА-Я \d.,;:!?]+$/.test(input.value)) ||
				(input.name === 'user_email' && /^[a-zA-Z0-9@-_.!]+$/.test(input.value))
			) {
				input.classList.add('success');
				input.classList.remove('error');
			} else {
				input.classList.add('error');
				input.classList.remove('success');
			}
		});

		list.forEach((input) => {
			if (input.classList.contains('error')) {
				success = false;
			}
		});

		return success;
	};

	const sendData = (data) => {
		return fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json());
	};

	const submitForm = () => {
		const formElements = form.querySelectorAll('input');
		const formData = new FormData(form);
		const formBody = {};
		statusBlock.textContent = loadText;
		form.append(statusBlock);

		formData.forEach((val, key) => {
			formBody[key] = val;
		});

		someElem.forEach((elem) => {
			const element = document.getElementById(elem.id);
			if (elem.type === 'block') {
				formBody[elem.id] = element.textContent;
			} else if (elem.type === 'input') {
				formBody[elem.id] = element.value;
			}
		});

		if (validate(formElements)) {
			sendData(formBody)
				.then((data) => {
					statusBlock.textContent = successText;
					formElements.forEach((input) => {
						input.value = '';
					});
				})
				.catch((error) => {
					statusBlock.textContent = errorText;
				});
		} else {
			alert('Данные не валидны!');
		}
	};

	try {
		if (!form) {
			throw new Error('Верните форму на место');
		}
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			submitForm();
		});
	} catch (error) {
		console.log(error.message);
	}
};

export default sendForm;
