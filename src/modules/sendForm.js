const sendForm = (idForm) => {
	const form = document.getElementById(idForm);

	let user = {
		name: 'Alex',
		age: 24,
	};

	const sendData = (data) => {
		return fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
		}).then((res) => res.json());
	};

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		console.log('submit');
		sendData(user).then((data) => {
			console.log(data);
		});
	});
};

export default sendForm;
