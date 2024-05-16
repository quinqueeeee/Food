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

export default calc