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

export default slider












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

