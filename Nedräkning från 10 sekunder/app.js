const countdown = document.getElementById("countdown")
const message = document.getElementById("message")

function countdownFunction() {
    let count = 10
    const countdownInterval = setInterval(function () {
        if (count > 2) {
            count--
            countdown.innerHTML = count + " sekunder"


        } else if (count > 1) {
            count--
            countdown.innerHTML = count + " sekund"

        }
        else {
            clearInterval(countdownInterval)
            countdown.classList.add("hidden")
            message.classList.remove("hidden")
            document.body.classList.add("red")
        }
    }, 1000)
}

countdownFunction()