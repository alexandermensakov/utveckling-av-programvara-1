



function rollRandom() {
    let box = document.querySelector("#input")
    let div = document.querySelector("#div")
    let randomNumber = Math.floor(Math.random() * 10 + 1);

    if (box.value == randomNumber) {
        div.innerHTML = ` <h1>You Guessed The Right Number</h1> `
    }

    else {
        div.innerHTML = ` <h1>You Guessed The Wrong Number</h1> `
    }
    console.log(randomNumber)
}