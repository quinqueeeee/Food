const openModal = (modalSelector, modalTimerId) => {
	const modal = document.querySelector(modalSelector)
	modal.style.display = 'block'
	document.body.style.overflow = 'hidden' // стиль, при котором с открытым модальным окном не листается страница
	if (modalTimerId) {
		clearInterval(modalTimerId) // если пользователь сам открыл модальное окно, то не выполнится функция settimeout и модальноее окно не откроется повторно через определнное время 
	}
}

const closeModal = (modalSelector) => {
	const modal = document.querySelector(modalSelector)
	modal.style.display = 'none'
	document.body.style.overflow = '' // теперь листается
}



function modal(triggerSelector, modalSelector, modalTimerId) {
	// Modal
	const modalTrigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector)






	modalTrigger.forEach(item => {
		item.addEventListener('click', () => openModal(modalSelector, modalTimerId))
	})



	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') === '') { // если клик будет вне модального окна, тогда оно закроется
			closeModal(modalSelector)
		}
	})


	document.addEventListener('keydown', (e) => { // делаем функцию с искейпом
		if (e.code === "Escape") { // при нажатии на escape , js отследит это и выполнит функцию по закрытию модального окна
			closeModal(modalSelector)
		}
	})



	//--------------------------------------------------------------
	


	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal(modalSelector, modalTimerId) // если пользователь долистал до конца страницы , тогда выведется модальное окно, вычисления выше
			window.removeEventListener('scroll', showModalByScroll) // при этом окно выведется только 1 раз
		}
	}
	window.addEventListener('scroll', showModalByScroll)
}


export default modal
export { closeModal, openModal }