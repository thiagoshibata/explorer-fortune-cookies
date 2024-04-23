// -- VARIÁVEIS
const home = document.querySelector(".home")
const luck = document.querySelector(".fortune")
const linkOpenFortuneCookie = document.querySelector("#linkOpenFortuneCookie")
const btnAgain = document.querySelector("#btnAgain")
let numberFortune
//variável que vai receber a frase anterior. Iniciando com -1 para nunca iniciar igual a atual.
let numberOld = -1
// frases do dia
let phrases = [
  "Seu computador vai atualizar durante a reunião",
  "Seu chefe vai te pedir pra ficar até mais tarde com trabalho extra",
  "O pneu do carro pode furar e estará chovendo",
]

// -- EVENTOS
linkOpenFortuneCookie.addEventListener("click", handleOpenFortuneCookies)
btnAgain.addEventListener("click", changeToggle)

// -- FUNÇÕES
function handleOpenFortuneCookies() {
  //obtendo número da sorte através do Math.random()
  numberFortune = Math.round(Math.random() * (phrases.length - 1))

  //sorteando uma nova frase caso a atual seja igual a anterior.
  while (numberFortune == numberOld) {
    numberFortune = Math.round(Math.random() * (phrases.length - 1))
  }
  numberOld = numberFortune

  console.log(numberFortune)
  //adicionando a frase na página
  luck.querySelector("p").innerText = phrases[numberFortune]

  //alterando da página home para luck
  changeToggle()
}

function changeToggle() {
  home.classList.toggle("hide")
  luck.classList.toggle("hide")
}
