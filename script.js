// Timer functions. Change the current topic to the next one after a couple of seconds
function timer() {
    setTimeout(function(){document.getElementsByClassName('topic1')[0].style.display = 'none';
    document.getElementsByClassName('topic2')[0].style.display = 'initial'}, 400)
}

function timer2() {
    setTimeout(function(){document.getElementsByClassName('topic2')[0].style.display = 'none';
    document.getElementsByClassName('topic3')[0].style.display = 'initial'}, 400)
}

// Array to store the results
const answers = []

// These functions get the answers and send them to the array. I know its way too many of them, ill find a way to make a shorter version
function addAnswer() {
    const answer = document.querySelector('#answer1').innerHTML
    answers.push(answer)
}

function addAnswer2() {
    const answer2 = document.querySelector('#answer2').innerHTML
    answers.push(answer2)
}

function addAnswer3() {
    const answer3 = document.querySelector('#answer3').innerHTML
    answers.push(answer3)
}

function addAnswer4() {
    const answer4 = document.querySelector('#answer4').innerHTML
    answers.push(answer4)
}

function addAnswer5() {
    const answer5 = document.querySelector('#answer5').innerHTML
    answers.push(answer5)
}

function addAnswer6() {
    const answer5 = document.querySelector('#answer6').innerHTML
    answers.push(answer6)
}

function addAnswer7() {
    const answer7 = document.querySelector('#answer7').innerHTML
    answers.push(answer7)
}

function addAnswer8() {
    const answer8 = document.querySelector('#answer8').innerHTML
    answers.push(answer8)
}

function addAnswer9() {
    const answer9 = document.querySelector('#answer9').innerHTML
    answers.push(answer9)
}

// Arrays to store the data from the 3 sanins
const jiraya = ["Cheerful", "Positive", "Ninjutsu"]
const tsunade = ["Normal", "Realistic", "Taijutsu"]
const orochimaru = ["Calm", "Negative", "Strategy"]

const page = document.querySelector('.page')

// Function that creates the image of the selected sanin
function create(img) {
    var imageElement = document.createElement('img');
    imageElement.src = img;
    imageElement.className = 'sanins'
    document.getElementById('3sanins').remove();
    page.appendChild(imageElement)
}

// Function that creates a text paragraph to show the result
function result(sanin) {
    document.querySelector('.topic3').remove();

    var textElement = document.createElement('p');
    textElement.className = 'result'
    textElement.innerHTML = sanin
    page.appendChild(textElement)
    
}

// This function compares the user answers to the 3 Sanins
function comparing() {
    if (answers[0] == jiraya[0] && answers[1] == jiraya[1] || answers[1] == jiraya [1] && answers[2] == jiraya[2] || answers[0] == jiraya [0] && answers[2] == jiraya[2]) {
    create('jiraya.jpg')
    result('Jiraya')
    } else if (answers[0] == tsunade[0] && answers[1] == tsunade[1] || answers[1] == tsunade [1] && answers[2] == tsunade[2] || answers[0] == tsunade [0] && answers[2] == tsunade[2]) {
        create('tsunade.jpg')
        result('Tsunade')
    } else if (answers[0] == orochimaru[0] && answers[1] == orochimaru[1] || answers[1] == orochimaru [1] && answers[2] == orochimaru[2] || answers[0] == orochimaru [0] && answers[2] == orochimaru[2]) {
        create('orochimaru.jpg')
        result('Orochimaru')
    } else {
        create('fail.jpg')
        result('None')
    }
} 
