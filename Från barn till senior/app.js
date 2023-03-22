const box = document.querySelector("#input")
const div = document.querySelector("#div")



function checkNumber() {
    const box = document.querySelector("#input")
    if (box.value == 0) {
        div.innerHTML = ` <h1>ange en giltig ålder</h1>`


    } else if (box.value < 13) {
        div.innerHTML = ` <h1> du är ett barn</h1> `

    }
    else if (box.value < 20) {
        div.innerHTML = ` <h1> du är en tonårig</h1> `

    }
    else if (box.value < 65) {
        div.innerHTML = ` <h1>du är en vuxen</h1> `

    } else {

        div.innerHTML = ` <h1> du är en senior</h1> `


    }
}  