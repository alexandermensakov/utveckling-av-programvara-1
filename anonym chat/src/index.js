
const express = require("express")
const app = express()
app.use(express.static('public'))
const messages = [
    { message: "hello", },
    { message: "hello there" },
    { message: "wassup" }]


app.get('/api/message', (req, res) => {
    res.status(200).json(messages)
})

app.post("/api/message", (req, res) => {

})

app.listen(3000, () => {
    console.log("server is running")
})