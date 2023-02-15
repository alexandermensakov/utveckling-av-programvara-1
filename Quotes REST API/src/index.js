const express = require("express")
const app = express()




app.get("/hello", (req, res) => {
    res.send("hej på dig")
})



app.listen(3000, () => {
    console.log("server is running")
})