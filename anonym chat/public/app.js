fetchMessage()

async function fetchMessage() {
    const res = await fetch("/api/message")
    let data = await res.json()
    console.log(data)
    document.querySelector("#parent").innerHTML =
        `
    ${data.map(message => `<div><h1>${message.messages} </h1><p> ${message.timeStamp}</p></div>`).res.join("")}

    `
}