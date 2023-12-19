import JSConfetti from 'js-confetti'
const word = 'santa' 
const wordArr = word.split('')
const wordDisplay = document.getElementById('word-display')
document.addEventListener('submit', handleGuess)

function renderSpaces() {
    const wordHtml = wordArr.map(() => {
        return `<span class="letter">-</span>`
    })
    wordDisplay.innerHTML = wordHtml.join('')
}
renderSpaces()

function renderGuess(arr) {
    const wordHtml = arr.map((letter) => {
        return `<span class="letter">${letter}</span>`
    })
    wordDisplay.innerHTML = wordHtml.join('')
}


function handleGuess(e) {
    e.preventDefault()
/**
 * Debug Challenge:
 * 1. There are loads of problems with the 
 *    code below. Find them and fix them!
 **/
    
/* bugs begin 🦠*/ 

    const input = document.getElementById('user-input')
    let guess = input.value
    let currentState = wordDisplay.innerText.split('').map((char, index) => {
        if (wordArr[index] === guess) {
            return guess;
        }
        return char !== '-' ? char : '-';
    });

    wordArr.forEach((letter, index) => {
        if (letter === guess) {
            currentState[index] = letter
        }
    })
/* bugs end 🦠*/ 

    renderGuess(currentState)
    checkWin(guess)
    input.value = ''
}

function checkWin(guess) {
    if (word === guess) {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
            emojis: ['🧑‍🎄', '🎅'],
            emojiSize: 50,
            confettiNumber: 60,
            confettiRadius: 6,
        })
        jsConfetti.addConfetti()
    }
}
