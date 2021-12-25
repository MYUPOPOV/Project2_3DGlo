const textValidation = () => {
	/* Главная страница */
	const form1Name = document.getElementById('form1-name');
	console.log('~ form1Name', form1Name);
	const form1Email = document.getElementById('form1-email');
	console.log('~ form1Email', form1Email);
	const form1Phone = document.getElementById('form1-phone');
	console.log('~ form1Phone', form1Phone);

	/* Модальное окно */
	const form3Name = document.getElementById('form3-name');
	console.log('~ form3Name', form3Name);
	const form3Phone = document.getElementById('form3-phone');
	console.log('~ form3Phone', form3Phone);
	const form3Email = document.getElementById('form3-email');
	console.log('~ form3Email', form3Email);

	/* Остались вопросы? */
	const form2Name = document.getElementById('form2-name');
	console.log('~ form2Name', form2Name);
	const form2Email = document.getElementById('form2-email');
	console.log('~ form2Email', form2Email);
	const form2Phone = document.getElementById('form2-phone');
	console.log('~ form2Phone', form2Phone);
	const form2Message = document.getElementById('form2-message');
	console.log('~ form2Message', form2Message);
};

export default textValidation;
