let outputElement = document.querySelector(".output")
const allButtons = document.querySelectorAll(".btn")
let string = " "

const toggleTheme = () => { 
    document.body.classList.toggle("darkmode") 
}
const printText = (oneButton) => { 
    string += oneButton.textContent 
}
const calculate = () => { 
    string = eval(string) 
}
const reset = () => {
    string = " "
}

allButtons.forEach((oneButton) => {
    oneButton.addEventListener("click", () => {

        oneButton.classList.contains("special") ? toggleTheme() : oneButton.classList.contains("clear") ? reset() : oneButton.classList.contains("calculate") ? calculate() : printText(oneButton)

        outputElement.value = string
    })
})

