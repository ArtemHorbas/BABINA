const selectBtn = document.querySelector('.nav-list-language')
const selectList = document.querySelector('.nav-languges--select')
const options = document.querySelectorAll('.languages-option')


selectBtn.addEventListener('click', () => {
	selectList.classList.toggle('nav-languges--select--active')
});

options.forEach(option => {
		option.onclick = function() {
			selectBtn.firstElementChild.innerText = this.innerText
			selectList.classList.remove('nav-languges--select--active')
		}
})

