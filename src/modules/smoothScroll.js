const smoothScroll = () => {
	const scrollBtn = document.querySelector('[href = "#service-block"]');
	const serviceBlock = document.getElementById('service-block');
	const menuItems = document.querySelectorAll('menu>ul>li>a');

	const scrollUp = function (object) {
		object.scrollIntoView({ block: 'start', behavior: 'smooth' });
	};

	scrollBtn.addEventListener('click', (event) => {
		event.preventDefault();
		scrollUp.bind(serviceBlock)(serviceBlock);
	});

	menuItems.forEach((item) => {
		const itemLink = document.getElementById(`${item.getAttribute('href').substring(1)}`);
		item.addEventListener('click', (event) => {
			event.preventDefault();
			scrollUp.bind(itemLink)(itemLink);
		});
	});
};

export default smoothScroll;
