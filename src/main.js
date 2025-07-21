const quoteApiUrl = "https://api.quotable.io/quotes/random?minLength=100&maxLength=140"
const quoteSection = document.getElementById("qoute")
const userInput = document.getElementById("quote-input")


let quote = ""
let time = 60;
let timer = "";
let mistakes = 0;


const renderNewQuote = async() => {
    const respnse  = await fetch (quoteApiUrl);

    let data = await respnse.json()

    quote =  data.content
    
    let arr = quote.split("").map(value => {
        return "<span class = 'quote-chars'>"+ value + "</span>"
    })
    quoteSection.innerHTML += arr.join("")

}

window.onload = ()=> {
    userInput.value
    document.getElementById("start-test").style.display = "block"
    document.getElementById("stop=test").style.display = "none"
    userInput.disabled = true;
    renderNewQuote()
}