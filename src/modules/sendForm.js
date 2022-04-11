/*jshint esversion: 6 */

import { appendStatusAnimation } from './helpers';

const sendForm = ({ formId, someElem = [] }) => {
	const modal = document.querySelector('.popup');

	const form = document.getElementById(formId);
	let statusBlock = document.createElement('div');

	const validate = (list) => {
		let success = true;

		list.forEach((input) => {
			if (
				(input.name === 'user_phone' && /^[\d+()+-]+$/.test(input.value) && input.value.length > 10) ||
				(input.name === 'user_name' && /^[а-яА-Я ]+$/.test(input.value) && input.value.length > 1) ||
				(input.name === 'user_message' && /^[а-яА-Я0-9\-.,;:!? ]+$/.test(input.value)) ||
				(input.name === 'user_email' && /^[a-zA-Z0-9@-_.!]+$/.test(input.value) && input.value.length > 0)
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
				'Content-Type': 'application/json', // нужно form/multipart ?
			},
		}).then((res) => res.json());
	};

	const submitForm = () => {
		const formElements = form.querySelectorAll('input');
		const formData = new FormData(form);
		const formBody = {};
		appendStatusAnimation(statusBlock, 'preload');
		form.append(statusBlock);
		formData.forEach((val, key) => {
			formBody[key] = val;
		});

		// console.log('~ form', form);
		// console.log('~  formData', formData);
		// console.log('~  formData', formBody);

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
					appendStatusAnimation(statusBlock, 'done');
					setTimeout(() => {
						statusBlock.innerHTML = '';
						modal.style.display = 'none';
					}, 2000);
					formElements.forEach((input) => {
						input.value = '';
					});
				})
				.catch((error) => {
					appendStatusAnimation(statusBlock, 'error');
					setTimeout(() => {
						statusBlock.innerHTML = '';
						modal.style.display = 'none';
					}, 2000);
				});
		} else {
			alert('Данные не валидны!');
			appendStatusAnimation(statusBlock, 'error');
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
