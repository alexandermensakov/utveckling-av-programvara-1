
const express = require("express")
const app = express()
const path = require('path');
const quotes = require('./data/quotes.json');


app.use(express.static(path.join('public')))

app.get('/api/quotes', (req, res) => {
    const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    res.json(randomQuotes)
})

app.listen(3000, () => {
    console.log("server is running")
})