//Variables
let randomNumber = Math.ceil(Math.random() * 10)
let Attempts = 1
let audioGame = document.getElementById('audioGame')
const audioWin = new Audio('sound/winGame.wav')
const audioEnter = new Audio('sound/enter.wav')
const audioAlarm = new Audio('sound/alarm.mp3')
const buttonOne = document.querySelector('#buttonOne')
const buttonTwo = document.querySelector('#buttonTwo')
const buttonThree = document.querySelector('#buttonThree')
const buttonFour = document.querySelector('#buttonFour')
const intro = document.querySelector('.intro')
const game = document.querySelector('.game')
const gameOver = document.querySelector('.gameOver')
const imgTextBomb = document.querySelector('#imgTextBomb')
const textIntroTwo = document.querySelector('#textIntroTwo')
const ninjaWin = document.querySelector('.ninjaWin')
const winScreen = document.querySelector('.winScreen')
const winText = document.querySelector('#winText')

//Events
buttonTwo.addEventListener('click', buttonTwoClick)
buttonOne.addEventListener('click', buttonOneClick)
buttonThree.addEventListener('click', buttonThreeClick)
buttonFour.addEventListener('click', buttonFourClick)
document.addEventListener('keydown', enter)

//Functions
function buttonOneClick (e) {
  e.preventDefault()
  intro.classList.toggle('hide')
  game.classList.toggle('hide')
  audioGame.play();
  audioGame.loop = true
}

function buttonTwoClick (e) {
  e.preventDefault()
  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) == randomNumber && Attempts == 1) {
  colorWeight()
  audioWin.play();
  game.classList.toggle('hide')
  ninjaWin.classList.toggle('hide')
  reset()
  resetText()
  } 

  else if (Number(inputNumber.value) == randomNumber && Attempts < 5) {
  textIntroTwo.style.color = "#34355B"
  textIntroTwo.style.fontWeight = "700"
  audioWin.play();
  winScreen.classList.toggle('hide')
  game.classList.toggle('hide')
  winText.innerText = `Parabéns, você conseguiu adivinhar o número em ${Attempts} tentativas.`
  reset()
  resetText()
  } 
  
  else if(Attempts == 5 && Number(inputNumber.value) == randomNumber) {
  resetAudioAlarm()
  textIntroTwo.style.color = "#34355B"
  textIntroTwo.style.fontWeight = "700"
  audioWin.play();
  winScreen.classList.toggle('hide')
  game.classList.toggle('hide')
  winText.innerText = `Parabéns, você conseguiu adivinhar o número a tempo! Na última tentativa!`
  reset()
  resetText()
  } 
  
  else if(Attempts == 2) {
  colorWeight()
  textIntroTwo.innerText = `A bomba está superaquecendo. 
  Tente outro número para desarmar.`
  plus()
  } 

  else if(Attempts == 3) {
  colorWeight()
  textIntroTwo.innerText = `O alarme da bomba vai disparar! 
  Tente outro número para desarmar.`
  plus()
  } 

  else if(Attempts == 4) {
  textIntroTwo.style.color = "red"
  textIntroTwo.style.fontWeight = "700"
  audioAlarm.play()
  audioAlarm.loop = true
  textIntroTwo.innerText = `A bomba está prestes a explodir. 
  Não erre dessa vez!`
  plus()
  } 
  
  else if(Attempts == 5) {
  resetAudioAlarm()
  game.classList.toggle('hide')
  gameOver.classList.toggle('hide')
  const gameOverAudio = new Audio('sound/loseExplosion.mp3');
  gameOverAudio.play();
  reset()
  resetText()
  } 
  
  else {
  colorWeight()
  textIntroTwo.innerText = `O relógio da bomba acelerou. 
  Tente outro número para desarmar.`
  plus()
}
}

function buttonThreeClick (e) {
  e.preventDefault()
  game.classList.toggle('hide')
  gameOver.classList.toggle('hide')
  audioGame.play()
  audioGame.loop = true
}

function buttonFourClick (e) {
  e.preventDefault()
  ninjaWin.classList.toggle('hide')
  intro.classList.toggle('hide')
}

function colorWeight () {
  textIntroTwo.style.color = "black"
  textIntroTwo.style.fontWeight = "700"
}

function enter (e) {
  if(e.key == 'Enter' && Number(inputNumber.value) >= 1) {
    audioEnter.play();
  }
}

function plus () {
  inputNumber.value = ""
  Attempts++
}

function reset () {
  audioGame.pause();
  audioGame.currentTime = 0
  inputNumber.value = ""
  randomNumber = Math.ceil(Math.random() * 10)
  Attempts = 1
  return
}

function resetText () {
  textIntroTwo.innerText = `Digite um número de 1 a 10 para tentar desarmar a bomba antes dela explodir.`
  textIntroTwo.style.color = "#34355B"
  textIntroTwo.style.fontWeight = "400"
}

function resetAudioAlarm () {
  audioAlarm.pause()
  audioAlarm.currentTime = 0
}