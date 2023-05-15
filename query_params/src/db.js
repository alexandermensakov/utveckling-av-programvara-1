const mysql2 = require("mysql2")

exports.db = mysql2.createpool({
    host: "localhost",
    database: "rest_api",
    user: "root",
    port: "3307"
})