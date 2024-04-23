// -- VARIÁVEIS
const home = document.querySelector(".home")
const luck = document.querySelector(".fortune")
const linkOpenFortuneCookie = document.querySelector("#linkOpenFortuneCookie")
const btnAgain = document.querySelector("#btnAgain")
let numberFortune
let numberOld = -1
// frases do dia
let phrases = [
  "Seu computador vai atualizar durante a reunião",
  "Seu chefe vai te pedir pra ficar até mais tarde com trabalho extra",
  "O pneu do carro pode furar e estará chovendo",
]
//obtendo o número de frases da sorte e subtraindo -1 para ajustar a posição 0 do array.

// -- EVENTOS
linkOpenFortuneCookie.addEventListener("click", handleOpenFortuneCookies)
btnAgain.addEventListener("click", changeToggle)

// -- FUNÇÕES
function handleOpenFortuneCookies() {
  //obtendo número da sorte através do Math.random()
  numberFortune = Math.round(Math.random() * (phrases.length - 1))

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
