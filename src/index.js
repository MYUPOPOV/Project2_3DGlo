/*jshint esversion: 6 */

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import smoothScroll from './modules/smoothScroll';
import calculator from './modules/calculator';
import textValidation from './modules/textValidation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sendForm from './modules/sendForm';

timer('15 january 2022 00:00');
menu();
modal();
smoothScroll();
textValidation();
tabs();
slider('portfolio-content', 'portfolio-item', 'portfolio-item-active', 'dot-active');
calculator(100);
sendForm({
	formId: 'form1',
	someElem: [
		{
			type: 'block',
			id: 'total',
		},
	],
});
sendForm({
	formId: 'form2',
	someElem: [
		{
			type: 'block',
			id: 'total',
		},
	],
});
sendForm({
	formId: 'form3',
	someElem: [
		{
			type: 'block',
			id: 'total',
		},
	],
});
