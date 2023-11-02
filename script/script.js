let userName = prompt('Enter your name')
const playersBoard = document.getElementById('playersBoard')
const computersBoard = document.getElementById('computersBoard')
let playersScore = 0// document.getElementById('playersScore').innerHTML
let computersScore = 0// document.getElementById('computersScore').innerHTML

let countButtonPress = 0;

const generatorButton = document.getElementById('btn')
generatorButton.addEventListener('click', generate)

if (userName === null || userName === '') {
	userName = 'Player'
}

document.getElementById('player-name').textContent = userName

function generate(){
	countButtonPress++
	let playersCard = parseInt(Math.random() * 9) + 6
	let computersCard = parseInt(Math.random() * 9) + 6
	//alert('Player card: ' + playersCard + '\nComputer card: ' + computersCard)

    playersScore+=playersCard;
    computersScore+=computersCard;

    document.getElementById('playersScore').innerHTML = playersScore
    document.getElementById('computersScore').innerHTML = computersScore

	create(playersCard, document.createElement('img'), playersBoard)
	create(computersCard, document.createElement('img'), computersBoard)

    if (countButtonPress === 3) {
		generatorButton.removeEventListener('click', generate)
        setTimeout(findWinner, 1000)
    }
}

function create(num, imageElement, board) {
	if (num === 14) {
		imageElement.src = '/cards/ace.png'
		imageElement.alt = 'Ace'
		imageElement.classList.add('card')
		board.appendChild(imageElement)
	} else if (num === 13) {
		imageElement.src = '/cards/king.png'
		imageElement.alt = 'King'
		imageElement.classList.add('card')
		board.appendChild(imageElement)
	} else if (num === 12) {
		imageElement.src = '/cards/queen.png'
		imageElement.alt = 'Queen'
		imageElement.classList.add('card')
		board.appendChild(imageElement)
	} else if (num === 11) {
		imageElement.src = '/cards/jack.png'
		imageElement.alt = 'Jack'
		imageElement.classList.add('card')
		board.appendChild(imageElement)
	} else if (num === 10) {
		imageElement.src = '/cards/10.png'
		imageElement.alt = '10'
		imageElement.classList.add('card')
		board.appendChild(imageElement)
	} else if (num === 9) {
		imageElement.src = '/cards/9.png'
		imageElement.alt = '9'
		imageElement.classList.add('card')
		board.appendChild(imageElement)
	} else if (num === 8) {
		imageElement.src = '/cards/8.png'
		imageElement.alt = '8'
		imageElement.classList.add('card')
		board.appendChild(imageElement)
	} else if (num === 7) {
		imageElement.src = '/cards/7.png'
		imageElement.alt = '7'
		imageElement.classList.add('card')
		board.appendChild(imageElement)
	} else if (num === 6) {
		imageElement.src = '/cards/6.png'
		imageElement.alt = '6'
		imageElement.classList.add('card')
		board.appendChild(imageElement)
	}
}

function findWinner(){
    if (playersScore > computersScore) {
			alert(`${userName} won`)
		} else if (computersScore > playersScore) {
			alert('Computer won')
		} else {
			alert('Draw')
		}
    toStart()
}

function toStart(){
	playersScore = 0 
	computersScore = 0  
    countButtonPress = 0
    document.getElementById('playersScore').innerHTML = playersScore
    document.getElementById('computersScore').innerHTML = computersScore
    removeCards(computersBoard)
    removeCards(playersBoard)
	generatorButton.addEventListener('click', generate)
}

function removeCards(parentElement) {
	for (; parentElement.firstChild; ) {
		parentElement.removeChild(parentElement.firstChild)
	}
}