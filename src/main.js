const quoteApiUrl = "https:/api.quotable.io/random?minLength=80&maxLenght=100"
const quoteSection = document.getElementById("qoute")
const userInput = document.getElementById("quote-input")


let quote = ""
let time = 60;
let timer = "";
let mistakes = 0;


window.onload = ()=> {
    userInput.value
    document.getElementById("start-test").style.display = "block"
    document.getElementById("stop=test").style.display = "none"
    userInput.disabled = true;
    renderNewQuote()
}