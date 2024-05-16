function slider({ container, slide, nextArr, prevArr, totalCounter, currentCounter, wrapper, field }) {
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


































//2 вар
// function slider({
// 	slidesSelector,
// 	containerSelector,
// 	prevArrow,
// 	nextArrow,
// 	totalId,
// 	currentId,
// 	sliderWrapperSelector,
// 	fieldSelector,
// }) {
// 	const slides = document.querySelectorAll(slidesSelector),
// 		slider = document.querySelector(containerSelector),
// 		prev = document.querySelector(prevArrow),
// 		next = document.querySelector(nextArrow),
// 		total = document.querySelector(totalId),
// 		current = document.querySelector(currentId),
// 		sliderWrapper = document.querySelector(sliderWrapperSelector),
// 		width = window.getComputedStyle(sliderWrapper).width,
// 		slidesField = document.querySelector(fieldSelector),
// 		dots = []

// 	let offset = 0
// 	let slideIndex = 1

// 	function addZero(num) {
// 		if (num >= 0 && num < 10) {
// 			return `0${num}`
// 		} else {
// 			return num
// 		}
// 	}

// 	slidesField.style.width = 100 * slides.length + "%"
// 	slidesField.style.display = "flex"
// 	slidesField.style.transition = "0.5s all"

// 	sliderWrapper.style.overflow = "hidden"

// 	slides.forEach(slide => (slide.style.width = width))

// 	slider.style.position = "relative"
// 	const indicators = document.createElement("ol")
// 	indicators.style.cssText = `
// 	position: absolute;
// right: 0;
// bottom: 0;
// left: 0;
// z-index: 15;
// display: flex;
// justify-content: center;
// margin-right: 15%;
// margin-left: 15%;
// list-style: none;
// 	`
// 	slider.append(indicators)

// 	for (let i = 0; i < slides.length; i++) {
// 		const dot = document.createElement("li")
// 		dot.setAttribute("data-type-to", i + 1)
// 		dot.style.cssText = `
// 		box-sizing: content-box;
// flex: 0 1 auto;
// width: 30px;
// height: 6px;
// margin-right: 3px;
// margin-left: 3px;
// cursor: pointer;
// background-color: #fff;
// background-clip: padding-box;
// border-top: 10px solid transparent;
// border-bottom: 10px solid transparent;
// opacity: .5;
// transition: opacity .6s ease;
// 		`
// 		if (i === 0) {
// 			dot.style.opacity = 1
// 		}
// 		dots.push(dot)
// 		indicators.append(dot)
// 	}

// 	function dotOpacity(i) {
// 		dots.forEach(dot => (dot.style.opacity = ".5"))
// 		dots[i - 1].style.opacity = "1"
// 	}

// 	function removeLetter(str) {
// 		return +str.replace(/\D/g, "")
// 	}

// 	dots.forEach(dot => {
// 		dot.addEventListener("click", e => {
// 			const slideTo = e.target.getAttribute("data-type-to")
// 			offset = removeLetter(width) * (slideTo - 1)
// 			slidesField.style.transform = `translateX(-${offset}px)`
// 			current.textContent = addZero(slideTo)

// 			dotOpacity(slideTo)
// 		})
// 	})

// 	total.textContent = addZero(slides.length)
// 	current.textContent = addZero(slideIndex)

// 	next.addEventListener("click", () => {
// 		if (offset == removeLetter(width) * (slides.length - 1)) {
// 			offset = 0
// 		} else {
// 			offset += removeLetter(width)
// 		}

// 		slidesField.style.transform = `translateX(-${offset}px)`
// 		slideIndex == slides.length ? (slideIndex = 1) : slideIndex++
// 		current.textContent = addZero(slideIndex)

// 		dotOpacity(slideIndex)
// 	})

// 	prev.addEventListener("click", () => {
// 		if (offset == 0) {
// 			offset = removeLetter(width) * (slides.length - 1)
// 		} else {
// 			offset -= removeLetter(width)
// 		}

// 		slidesField.style.transform = `translateX(-${offset}px)`
// 		slideIndex == 1 ? (slideIndex = slides.length) : slideIndex--
// 		current.textContent = addZero(slideIndex)

// 		dotOpacity(slideIndex)
// 	})
// }

// export default slider





















