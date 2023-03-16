const express = require("express")
const app = express()
const path = require('path');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gamesdb'
});


app.get('/api/games', (req, res) => {


})

app.use(express.static(path.join('public')))




app.listen(3000, () => {
    console.log("server is running")
})