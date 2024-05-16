import tabs from './modules/tabs'
import modal, { openModal } from './modules/modal'
import timer from './modules/timer'
import cards from './modules/cards'
import calc from './modules/calc'
import forms from './modules/forms'
import slider from './modules/slider'

window.addEventListener('DOMContentLoaded', () => {
	// делаем функцию при которой если пользователь пролисает до конца страницы , выведется модальное окно
	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000) // модальное окно откроется через 50секунд


	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
	modal('[data-modal]', '.modal', modalTimerId)
	timer('.timer', '2020-06-11')
	cards()
	calc()
	forms('form', modalTimerId)
	slider({
		container: '.offer__slider', // самый первый 'div' слайдера
		wrapper: '.offer__slider-wrapper', // обертка обертки для сладов
		field: '.offer__slider-inner', // обертка для всех слайдов
		slide: '.offer__slide', // слайд

		prevArr: '.offer__slider-prev', // назад
		nextArr: '.offer__slider-next', // вперед

		currentCounter: '#current', // левое число
		totalCounter: '#total', // правое число
	})
})




