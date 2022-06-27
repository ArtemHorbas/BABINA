
let	learBtns = document.querySelectorAll('.learn-heading--button')
let	lernTexts = document.querySelectorAll('.learn-text')

learBtns.forEach((btn, index) => {
	btn.addEventListener('click', function () {
		lernTexts.forEach((text) => {
			text.classList.remove('learn-text--active')
		});
		learBtns.forEach((btn) => {
			btn.classList.remove('learn-heading--button__active')
		});
		lernTexts[index].classList.add('learn-text--active');
		learBtns[index].classList.add('learn-heading--button__active');
	})
})
