/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
	// calc
	const result = document.querySelector('.calculating__result-span') // находим результат калькулятора на странице
	let sex, height, weight, age, ratio




	if (localStorage.getItem('sex')) { // если в локальном хранилище есть данные о поле пользователя , тогда получим его
		sex = localStorage.getItem('sex')
	} else { // если нет , тогда зададим его по умолчанию в виде названия и элемента
		sex = 'female'
		localStorage.setItem('sex', 'female')
	}




	if (localStorage.getItem('ratio')) { // если в локальном хранилище есть данные о активности пользователя , тогда получим его
		ratio = localStorage.getItem('ratio')
	} else { // если нет , тогда зададим его по умолчанию в виде названия и элемента
		ratio = 'female'
		localStorage.setItem('ratio', 1.375)
	}




	function initLocalSetting(selector, activeClass) {
		const elements = document.querySelectorAll(selector)

		elements.forEach(elem => { // перебераем все элементы
			elem.classList.remove(activeClass) // удаляем с каждого элемента класс активности

			if (elem.getAttribute('id') === localStorage.getItem('sex')) { // элемент имеет атрибут айди , который равен айтему пола в локальном хранилище , тогда добавляем класс активности
				elem.classList.add(activeClass)
			}

			if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) { // если элемент имеет атрибут (data-ratio) и он равен значению из локального хранилища активности , тогда так же добавляем класс активности
				elem.classList.add(activeClass)
			}
		})
	}
	initLocalSetting('#gender div', 'calculating__choose-item_active') // запускаем функцию с селектором блока , в котором лежат кнопки с разным полом и передаем класс активности
	getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active') // запускаем функцию с селектором блока , в котором лежат кнопки с выбором активности, и передаем класс активности



	function calcTotal() {
		if (!sex || !height || !weight || !age || !ratio) { // если все что в условии не указано на сайте, значит в результате будет выводиться сообщение ниже
			result.textContent = '____' // сообщение которое будет выводиться
			return
		}
		if (sex === 'female') { // если выбран женский пол , будут произведенны подсчеты ниже
			result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)
		} else { // если выбран мужской пол , будут произведенны подсчеты ниже
			result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
		}
	}
	calcTotal() // производим подсчеты




	function getStaticInformation(selector, activeClass) {
		const elements = document.querySelectorAll(selector) // находим все элементы с селектором , который укажем при вызове функции

		elements.forEach(elem => { // делаем перебор всех элементов
			elem.addEventListener('click', (e) => { // вышаем клик на каждый элемент
				if (e.target.getAttribute('data-ratio')) { // если клик будет по элементу у которого есть дата атрибут , отработает код ниже
					ratio = +e.target.getAttribute('data-ratio')
					localStorage.setItem('ratio', +e.target.getAttribute('data-ratio')) // сохраняем в локальное хранилище выбор пользователя из активности
				} else {
					sex = e.target.getAttribute('id')
					localStorage.setItem('sex', e.target.getAttribute('id')) // сохраняем в локальное хранилище выбор пола пользователя
				}

				elements.forEach(elem => { // перебираем все элементы и удаляем класс активности
					elem.classList.remove(activeClass)
				})

				e.target.classList.add(activeClass) // при клике на элемент , устанавливаем класс активности

				calcTotal() // производим подсчеты
			})
		})
		calcTotal() // производим подсчеты
	}
	getStaticInformation('#gender div', 'calculating__choose-item_active') // запускаем функцию с селектором блока , в котором лежат кнопки с разным полом и передаем класс активности
	getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active') // запускаем функцию с селектором блока , в котором лежат кнопки с выбором активности, и передаем класс активности




	function getDynamicInformation(selector) {
		const input = document.querySelector(selector) // ищем инпут по селектору

		input.addEventListener('input', () => { // отслеживаем что прописано в инпуте

			if (input.value.match(/\D/g)) { // прописано (если пользователь ввел не число , значит произошла ошибка)
				input.style.border = '1px solid red' // если пользователь ввел не число , будет перекрашен бордер в красный
			} else {
				input.style.border = 'none' // если пользователь ввел число , будет перекрашен бордер в белый (обратно)
			}

			switch (input.getAttribute('id')) { // сделали блок с получением атрбита из айди (#height, #weight, #age)
				case 'height': // делаем кейс с высотой
					height = +input.value // получаем высоту из введеных данных из инпута 
					break // останавливаем кейс
				case 'weight': // делаем кейс с весом
					weight = +input.value // получаем вес из введеных данных из инпута 
					break // останавливаем кейс
				case 'age': // делаем кейс с возрастом
					age = +input.value // получаем возраст из введеных данных из инпута 
					break // останавливаем кейс
			}
			calcTotal() // производим подсчеты
		})
	}
	getDynamicInformation('#height')// вызываем функцию и передаем сюда селектор
	getDynamicInformation('#weight')// вызываем функцию и передаем сюда селектор
	getDynamicInformation('#age') // вызываем функцию и передаем сюда селектор
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
	// Используем классы для карточек
	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector) {
			this.src = src
			this.alt = alt
			this.title = title
			this.descr = descr
			this.price = price
			this.parent = document.querySelector(parentSelector)
			this.transfer = 27
			this.changeToUAH()
		}


		changeToUAH() {
			this.price = +this.price * this.transfer
		}

		render() {
			const element = document.createElement('div')
			element.innerHTML = `
		<div class="menu__item">
			<img src=${this.src} alt=${this.alt}>
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.descr}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
				<div class="menu__item-cost">Цена:</div>
				<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
			</div>
		</div>
		`
			this.parent.append(element)
		}
	}



	//59 start---------------------------------
	

	(0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu')
		.then(data => {
			data.forEach(({ img, altimg, title, descr, price }) => {
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render()
			})
		})



	// //60-----------------------------------
	// axios.get('http://localhost:3000/menu')
	// 	.then(data => {
	// 		data.data.forEach(({ img, altimg, title, descr, price }) => {
	// 			new MenuCard(img, altimg, title, descr, price, '.menu .container').render()
	// 		})
	// 	})
	// //59 end---------------------------------
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
	// Forms
	const forms = document.querySelectorAll(formSelector)


	// сделали варианты ответов при попытках отправки формы
	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Скоро мы с вами свяжемся',
		fail: 'Произошла ошибка...'
	}




	// сделали отправку данных из формы на сервер
	forms.forEach(item => {
		bindPostData(item) // подвязали на каждую форму функцию 'bindPostData'
	})




	




	// делаем сервер
	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault() // сбрасываем стандартное поведение кнопки

			// сделали спиннер ----------------------------------------------
			const statusMessage = document.createElement('img') // сделали блок в котором будет храниться сообщение из объекта 'message'

			statusMessage.src = message.loading // добавили изображение в loading из объекта message

			statusMessage.classList.add('spinner') // добавили стили (display - block)

			form.insertAdjacentElement('afterend', statusMessage) // вывели сообщение на странице после блока form
			//-------------------------------------------------------------

			const formData = new FormData(form) // создаем 

			// создаем новый объект для данных в виде json формата----------
			const json = JSON.stringify(Object.fromEntries(formData.entries())) // сначало преобразуем в массив массивов, далее в классичиский объект, а после классический объект образуем в json
			//--------------------------------------------------




			//настроили FETCH
			;(0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
				.then(data => { // data - те данные которые нам вернул сервер
					console.log(data) // выводятся в консоль данные пользователя
					showThanksModal(message.success)  // произойдет выполнение функции ниже (скроется старое модальное окно и выведится новое, без полей для ввода, через 4с оно закроется)
					statusMessage.remove()
				})
				.catch(() => { // код будет выполняться в случае ошибки
					showThanksModal(message.fail) // произойдет выполнение функции ниже (скроется старое модальное окно и выведится новое, без полей для ввода, через 4с оно закроется)
				})
				.finally(() => { // код будет выполняться всегда
					form.reset() // очищаем форму после отправки
				})
		})
	}




	// доработали вывод сообщения в виде другого модального окна об успешной отправке данных

	function showThanksModal(message) { // передаем message как название объекта, и выше приминяем его и его же свойства
		const prevModalDialog = document.querySelector('.modal__dialog') // находим старое модальное окно

		prevModalDialog.style.display = 'none' // скрываем его
		;(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId) // происходит выполнение функции по открытию модального окна

		const thankModal = document.createElement('div') // создаем кастомное модальное окно
		thankModal.classList.add('modal__dialog') // даем те же стили , что и в старом 
		thankModal.innerHTML = ` 
	<div class='modal__content'>
	<div class='modal__close' data-close>×</div>
	<div class='modal__title'>${message}</div>
	</div>
	` // создали кастомное модальное окно


		document.querySelector('.modal').append(thankModal) // выгружаем кастомное модальное окно
		setTimeout(() => {
			thankModal.remove() // через 4с скрываем кастомное модальное окно
			prevModalDialog.style.display = 'block' // через 4с открываем обратно старое модальное окно
			;(0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal') // через 4с закрываем модальное окно 
		}, 4000)
	}



	//58-59-------------------------------------
	// fetch('http://localhost:3000/menu')
	// 	.then(data => data.json())
	// 	.then(res => console.log(res))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({ container, slide, nextArr, prevArr, totalCounter, currentCounter, wrapper, field}) {
	// //вариант 2
	const slides = document.querySelectorAll(slide),
		sliderCont = document.querySelector(container),
		prev = document.querySelector(prevArr),
		next = document.querySelector(nextArr),
		total = document.querySelector(totalCounter),
		current = document.querySelector(currentCounter),
		slidesWrapper = document.querySelector(wrapper),
		slidesField = document.querySelector(field),
		width = window.getComputedStyle(slidesWrapper).width
	let slideIndex = 1
	let offset = 0

	// работа со значениями
	if (slides.length < 10) {
		total.textContent = `0${slides.length}`
		current.textContent = `0${slideIndex}`
	} else {
		total.textContent = slides.length
		current.textContent = slideIndex
	}










	// работа с каруселью
	slidesField.style.width = 100 * 4 + '%'
	slidesWrapper.style.overflow = 'hidden'
	slides.forEach(slide => {
		slide.style.width = width
	})

	next.addEventListener('click', () => {
		if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) { //500
			offset = 0
		} else {
			offset += +width.replace(/\D/g, '')
		}

		slidesField.style.transform = `translateX(-${offset}px)`



		// работа со значениями
		if (slideIndex == slides.length) {
			slideIndex = 1
		} else {
			slideIndex++
		}

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`
		} else {
			current.textContent = slideIndex
		}


		// dots
		dots.forEach(dot => {
			dot.style.opacity = '.5'
		})
		dots[slideIndex - 1].style.opacity = 1
	})

	prev.addEventListener('click', () => {
		if (offset == 0) {
			offset = +width.replace(/\D/g, '') * (slides.lenght - 1)
		} else {
			offset -= +width.replace(/\D/g, '')
		}

		slidesField.style.transform = `translateX(-${offset}px)`


		// работа со значениями

		if (slideIndex == 1) {
			slideIndex = slides.length
		} else {
			slideIndex--
		}



		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`
		} else {
			current.textContent = slideIndex
		}


		// dots
		dots.forEach(dot => {
			dot.style.opacity = '.5'
		})
		dots[slideIndex - 1].style.opacity = 1
	})



	// точки , индекаторы снизу слайдера
	const slider = document.querySelector('.offer__slider')


	slider.style.position = 'relative'

	const indicators = document.createElement('ol'),
		dots = []
	indicators.style.cssText = `
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 15;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
`

	slider.append(indicators)

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li')
		dot.setAttribute('data-slide-to', i + 1)

		dot.style.cssText = `
box-sizing: content-box;
flex: 0 1 auto;
width: 30px;
height: 6px;
margin-right: 3px;
margin-left: 3px;
cursor: pointer;
background-color: #fff;
background-clip: padding-box;
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;
opacity: .5;
transition: opacity .6s ease;
`

		if (i == 0) {
			dot.style.opacity = 1
		}
		indicators.append(dot)
		dots.push(dot)
	}

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to')

			slideIndex = slideTo

			offset = +width.replace(/\D/g, '') * (slideTo - 1)

			slidesField.style.transform = `translateX(-${offset}px)`

			if (slides.length < 10) {
				current.textContent = `0${slideIndex}`
			} else {
				current.textContent = slideIndex
			}

			dots.forEach(dot => {
				dot.style.opacity = '.5'
				dots[slideIndex - 1].style.opacity = 1
			})
		})
	}
	)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);












//вариант 1

// let slideIndex = 1


// showSlides(slideIndex)
// function showSlides(n) {
// 	if (n > slides.length) {
// 		slideIndex = 1
// 	}

// 	if (n < 1) {
// 		slideIndex = slides.length
// 	}

// 	slides.forEach(item => item.style.display = 'none')

// 	slides[slideIndex - 1].style.display = 'block'
// }


// function plusSlides(n) {
// 	showSlides(slideIndex += n) // если будет + , тогда добавим 1, если - , то отнимаем
// }

// prev.addEventListener('click', () => {
// 	plusSlides(-1)
// })

// next.addEventListener('click', () => {
// 	plusSlides(1)
// })



/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
	// Tabs
	const tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsParent = document.querySelector(tabsParentSelector)


	const hideTabContent = () => {
		tabsContent.forEach(item => {
			item.style.display = 'none'
		})
		tabs.forEach(item => {
			item.classList.remove(activeClass)
		})
	}


	const showTabContent = (i = 0) => {
		tabsContent[i].style.display = 'block'
		tabs[i].classList.add(activeClass)
	}


	hideTabContent()
	showTabContent()


	tabsParent.addEventListener('click', (e) => {
		const target = e.target
		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent()
					showTabContent(i)
				}
			})
		}
	})
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor((t / (1000 * 60 * 60 * 24))),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60) % 24))

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return '0' + num
		} else {
			return num
		}
	}

	function setClock(selector, endtime) {

		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000)

		updateClock()

		function updateClock() {
			const t = getTimeRemaining(endtime)

			days.innerHTML = getZero(t.days)
			hours.innerHTML = getZero(t.hours)
			minutes.innerHTML = getZero(t.minutes)
			seconds.innerHTML = getZero(t.seconds)

			if (t.total <= 0) {
				clearInterval(timeInterval)
			}
		}
	}

	setClock(id, deadline)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
//Функция для отправки данных в файл db.json
const postData = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST', // каким образом
		headers: {
			'Content-type': 'application/json'
		},
		body: data
	})
	return await res.json() // теперь с информация будет приходить в файл db.json
}


const getResource = async (url) => {
	const res = await fetch(url)

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`) // throw - выкидываем ошибку
	}

	return await res.json()
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");








window.addEventListener('DOMContentLoaded', () => {
	// делаем функцию при которой если пользователь пролисает до конца страницы , выведется модальное окно
	const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 50000) // модальное окно откроется через 50секунд


	;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
	;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId)
	;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer', '2020-06-11')
	;(0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])()
	;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])()
	;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])('form', modalTimerId)
	;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
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





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map