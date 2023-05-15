const mysql = require("mysql2")
exports.db = mysql.createPool({
    host: " localhost",
    user: "root",
    database: "sekrare inloggning",
    port: "3307"

})