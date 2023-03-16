const box = document.querySelector("#input")
const div = document.querySelector("#div")



function checkNumber() {
    const box = document.querySelector("#input")
    if (box.value > 0) {
        div.innerHTML = ` <h1>talet är positivt</h1>`
        document.getElementById("div").style.color = "green";

    } else if (box.value < 0) {
        div.innerHTML = ` <h1>talet är negativt</h1>`
        document.getElementById("div").style.color = "red";


    } else {
        div.innerHTML = ` <h1>talet är noll</h1>`
        document.getElementById("div").style.color = "blue";

    }
}  