import { closeModal, openModal } from './modal'
import { postData } from '../services/services'

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
			postData('http://localhost:3000/requests', json)
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
		openModal('.modal', modalTimerId) // происходит выполнение функции по открытию модального окна

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
			closeModal('.modal') // через 4с закрываем модальное окно 
		}, 4000)
	}



	//58-59-------------------------------------
	// fetch('http://localhost:3000/menu')
	// 	.then(data => data.json())
	// 	.then(res => console.log(res))
}

export default forms