const diceImg = document.querySelector("#dice-div")

function throwDice() {
    const diceSides = [
        "img/dice1.png",
        "img/dice2.png",
        "img/dice3.png",
        "img/dice4.png",
        "img/dice5.png",
        "img/dice6.png"
    ]
    const randomDice = Math.floor(Math.random() * diceSides.length)
    const randomImage = diceSides[randomDice]

    const diceImg = document.querySelector("#dice-image")
    diceImg.src = randomImage
}
