let userName = prompt('Enter your name')
let countButtonPress = 0

const generatorButton = document.getElementById('btn')
generatorButton.addEventListener('click', generate)

if (userName === null || userName === '') {
	userName = 'Player'
}
document.getElementById('player-name').textContent = userName

function generate() {
	countButtonPress++

	let content11 = document.getElementById('el11').innerHTML
	let content21 = document.getElementById('el21').innerHTML
	let content31 = document.getElementById('el31').innerHTML

	let content12 = document.getElementById('el12').innerHTML
	let content22 = document.getElementById('el22').innerHTML
	let content32 = document.getElementById('el32').innerHTML

	let content13 = document.getElementById('el13').innerHTML
	let content23 = document.getElementById('el23').innerHTML
	let content33 = document.getElementById('el33').innerHTML

	swapContent(
		content11,
		content21,
		content31,
		parseInt(Math.random() * 13) + 5,
		'el11',
		'el21',
		'el31'
	)
	swapContent(
		content12,
		content22,
		content32,
		parseInt(Math.random() * 13) + 5,
		'el12',
		'el22',
		'el32'
	)
	swapContent(
		content13,
		content23,
		content33,
		parseInt(Math.random() * 13) + 5,
		'el13',
		'el23',
		'el33'
	)

	generatorButton.removeEventListener('click', generate)
	setTimeout(()=>{
		let el21Value = document.getElementById('el21').textContent.trim()
		let el22Value = document.getElementById('el22').textContent.trim()
		let el23Value = document.getElementById('el23').textContent.trim()
		if (el21Value === el22Value && el22Value === el23Value) {
			alert(`${userName} WON`)
			countButtonPress = 0
			setTimeout(() => {
				document
					.querySelector('.shape-for-form')
					.classList.add('change-color-animation')
			}, 3000)
			document
				.querySelector('.shape-for-form')
				.classList.remove('change-color-animation')

		} else if (countButtonPress === 3){
			alert('TRY AGAIN')
			countButtonPress = 0
		}
		generatorButton.addEventListener('click', generate)
	}, 4000)
}

function swapContent(
	content1,
	content2,
	content3,
	numberOfScrolls,
	el1,
	el2,
	el3
) {
	let temp = content3
	content3 = content2
	content2 = content1
	content1 = temp

	document.getElementById(el1).innerHTML = content1
	document.getElementById(el2).innerHTML = content2
	document.getElementById(el3).innerHTML = content3

	numberOfScrolls--

	if (numberOfScrolls > 0) {
		setTimeout(
			() =>
				swapContent(
					content1,
					content2,
					content3,
					numberOfScrolls,
					el1,
					el2,
					el3
				),
			200
		)
	}
}