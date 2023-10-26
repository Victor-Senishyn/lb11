let userName = prompt('Enter your name');
const generatorButton = document.getElementById('gengrator');
let leftScore = 0;
let rightScore = 0;

generatorButton.addEventListener('click', generate)

if (userName === null || userName === '') {
    userName = 'Player';
}
document.getElementById('player-name').textContent = userName;

function generate() {
    let leftNum = parseInt(Math.random() * 10);
    let rightNum = parseInt(Math.random() * 10);

	document.querySelector('.right-c').classList.remove('shake-element')
	document.querySelector('.left-c').classList.remove('shake-element')

    document.getElementById('left-num').textContent = leftNum;
    document.getElementById('right-num').textContent = rightNum;

    if (leftNum > rightNum) {
        leftScore++;
    } else if (rightNum > leftNum) {
        rightScore++;
    }

    document.getElementById('left-score').textContent = leftScore;
    document.getElementById('right-score').textContent = rightScore;

    if (leftScore == 3) {
	    document.querySelector('.left-c').classList.add('shake-element')
        alert(`${userName} won`);
        toStartPosition();
    } else if (rightScore == 3) {
	    document.querySelector('.right-c').classList.add('shake-element')
		alert('Computer won');
        toStartPosition();
    } else if (rightScore == 3 && leftScore == 3) {
        alert('Draw');
        toStartPosition();
    }
}

function toStartPosition() {
    leftScore = 0;
    rightScore = 0;
    document.getElementById('left-score').textContent = leftScore;
    document.getElementById('right-score').textContent = rightScore;

    document.getElementById('left-num').textContent = 0;
    document.getElementById('right-num').textContent = 0;
}
