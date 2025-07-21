const quoteApiUrl = "https://api.quotable.io/quotes/random?minLength=100&maxLength=140"
const quoteSection = document.getElementById("qoute")
const userInput = document.getElementById("quote-input")


let quote = ""
let time = 60;
let timer = "";
let mistakes = 0;


const renderNewQuote = async() => {
    // const respnse  = await fetch (quoteApiUrl);

    const respnse = "Lorem ipsum dolor sit amet consectetur"
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

const displayResult = () => {
    document.querySelector(".result").style.display  = "block"
}


userInput.addEventListener("input", ()=> {
    let quoteChars = document.querySelectorAll(".quote-chars")
    quoteChars = Array.from(quoteChars)
    let userInputChars = userInput.value.split("")
    quoteChars.forEach((char, index)=> {
        if(char.innerText === userInputChars[index]){
            char.classList.add("success")
        }  
        else if(userInputChars[index] == null){
            if(char.classList.contains("success")){
                char.classList.remove("success")
            }
            else {
                char.classList.remove("fail")
            }
        }
        else {
            if(!char.classList.contains("fail")){
                mistakes += 1;
                char.classList.add("fail")
            }
            document.getElementById("mistakes").innerText =  mistakes
        }

        let check = quoteChars.every((element) => {
            return element.classList.contains("success")
        })
        if(check){
            displayResult()
        }
        
    })

})