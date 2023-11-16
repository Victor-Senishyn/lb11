let countTrue = 0
let countFalse = 0
let num = 0

let userName = prompt('Enter your name')
if (userName === null || userName.trim() === '') {
	userName = 'Player'
}
$('#user-name').text(userName)

const questionAndAnswer = {
	question: ['snow','red','stone','tree','sky','ocean','mountain','flower','fire','book','sun','moon','star','cloud','wind'],
	answer: ['сніг','червоний','каміння','дерево','небо','океан','гора','квітка','вогонь','книга','сонце','місяць','зірка','хмара','вітер'],
}

let startSize = questionAndAnswer.question.length
$('#number').text(
	`${startSize}/0`		
)
let rand = parseInt(Math.random() * questionAndAnswer.question.length)

$('#question').text(questionAndAnswer.question[rand])
$('#btn').on('click', ()=>{
	const userAnswer = String($('#answer').val()).trim().toLowerCase()//val для отримання значення з input
	const correctAnswer = questionAndAnswer.answer[rand].toLowerCase()


	if (userAnswer === correctAnswer) {
		countTrue++
		num++
		let temp = {
			question: [],
			answer: [],
		}

		let i = 0
		let delElement
		for (let item of questionAndAnswer.answer) {
			if (correctAnswer !== item) {
				temp.answer[i++] = item
			} else {
				delElement = i
			}
		}

		i = 0
		for (let j = 0; j < questionAndAnswer.question.length; j++) {
			if (j !== delElement) {
				temp.question[i++] = questionAndAnswer.question[j]
			}
		}
		questionAndAnswer.question = temp.question
		questionAndAnswer.answer = temp.answer
	} else {
		alert('Wrong answer')
		countFalse++
	}
	$('#answer').val('')

	$('#number').text(
		`${startSize}/${num}`
	)
	$('#score').text(
		`True:${countTrue} False:${countFalse}`
	)

	if (questionAndAnswer.question.length === 0) {
		$('#question').text(`Test over`)
		if (countFalse === 0) {
			alert('Your level of English is very good')
		} else if (countFalse < 6) {
			alert('Your level of English is good')
		} else if (countFalse < 11) {
			alert('Your level of English is bad')
		} else {
			alert('Your level of English is very bad')
		}
	}else{
		rand = parseInt(Math.random() * questionAndAnswer.question.length)
		$('#question').text(questionAndAnswer.question[rand])
	}
})