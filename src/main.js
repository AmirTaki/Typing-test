const quoteApiUrl = "https://api.quotable.io/quotes/random?minLength=100&maxLength=140"
const quoteSection = document.getElementById("qoute")
const userInput = document.getElementById("quote-input")


let quote = ""
let time = 60;
let timer = "";
let mistakes = 0;


const renderNewQuote = async() => {
    // const respnse  = await fetch (quoteApiUrl);

    const respnse = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nam. Voluptatibus vero fuga illum culpa ex voluptatem, quas incidunt quod vel laudantium iure minus soluta voluptas tempore dolorum ipsa officiis."
    // let data = await respnse.json()

    // quote =  data.content
    
    let arr = respnse.split("").map(value => {
        return "<span class = 'quote-chars'>"+ value + "</span>"
    })

    // console.log(arr)
    quoteSection.innerHTML += arr.join("")

}

window.onload = ()=> {
    userInput.value = ""
    document.getElementById("start-test").style.display = "block"
    document.getElementById("stop-test").style.display = "none"
    userInput.disabled = true;
    renderNewQuote()
}

const startTest = () => {
    mistakes = 0;
    timer = ""
    userInput.disabled = false;
    document.getElementById("start-test").style.display = "none"
    document.getElementById("stop-test").style.display = 'block'   
}