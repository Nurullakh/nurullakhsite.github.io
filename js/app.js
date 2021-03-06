list = document.querySelectorAll('.second__list ul li')
block = document.querySelectorAll('.second__block')

const change = (e) => {
	list.forEach((a) => {a.style.color = 'black'})
	e.target.style.color = 'red'
	if (e.target === list[0]) {
		block.forEach((a) => {
			a.style.background = '#818181'
		})
	} else if (e.target === list[1]) {
		block.forEach((a) => {
			a.style.background = 'black'
		})
	} else if (e.target === list[2]) {
		block.forEach((a) => {
			a.style.background = 'red'
		})
	} else if (e.target === list[3]) {
		block.forEach((a) => {
			a.style.background = 'yellow'
		})
	} else if (e.target === list[4]) {
		block.forEach((a) => {
			a.style.background = 'blue'
		})
	}
	
}
list.forEach((arr) => {
	arr.addEventListener('click', change)
})

class Team {
	constructor() {
		this.nameStart = document.querySelector('.third h3')
		this.avatar = document.querySelector('.third__avatar img')
		this.avatars = document.querySelectorAll('.third__avatars img')
		this.name = ['nurullakh akhmedov','muhammadsaid abdulaev','ibrakhim kamalov','ramazan ukaev','ali kamalov']
		this.img = 
		[
		'img/avatar1.jpg',
		'img/avatar2.jpg', 
		'img/avatar3.jpg', 
		'img/avatar4.jpg', 
		'img/avatar5.jpg'
		]
		this.index = 0
	}
	change(e) {
		if (this.index === 0) {
			this.avatar.src = e.target.src
			e.target.src = this.img[0]
			++this.index
			if (this.avatar.src.includes('avatar1')) {
				this.nameStart.innerText = this.name[0]
			} else if (this.avatar.src.includes('avatar2')) {
				this.nameStart.innerText = this.name[1]
			} else if (this.avatar.src.includes('avatar3')) {
				this.nameStart.innerText = this.name[2]
			} else if (this.avatar.src.includes('avatar4')) {
				this.nameStart.innerText = this.name[3]
			} else if (this.avatar.src.includes('avatar5')) {
				this.nameStart.innerText = this.name[4]
			} 
		} else {
			let img = e.target.src
			e.target.src = this.avatar.src
			this.avatar.src = img
			if (this.avatar.src.includes('avatar1')) {
				this.nameStart.innerText = this.name[0]
			} else if (this.avatar.src.includes('avatar2')) {
				this.nameStart.innerText = this.name[1]
			} else if (this.avatar.src.includes('avatar3')) {
				this.nameStart.innerText = this.name[2]
			} else if (this.avatar.src.includes('avatar4')) {
				this.nameStart.innerText = this.name[3]
			} else if (this.avatar.src.includes('avatar5')) {
				this.nameStart.innerText = this.name[4]
			}

		}

		
	}
}
const people = new Team()
people.avatars.forEach((a) => {
	a.addEventListener('click', function(e) {
		people.change(e)
	})
})

let hamburger = document.querySelector('.hamburger')
let hamburgerActive = document.querySelector('.hamburger__active')
let hamburgerOn = document.querySelector('.hamburger__onactive')

hamburger.addEventListener('click', function() {
	if (hamburgerActive.classList.contains('hamburger-active')) {
		hamburgerOn.style.display = 'none'
		hamburgerActive.classList.remove('hamburger-active')
	} else {
		hamburgerOn.style.display = 'block'
		hamburgerActive.classList.add('hamburger-active')
	}
})