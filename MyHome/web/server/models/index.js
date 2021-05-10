const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

let pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
});

function getConnection(callback) {
    pool.getConnection(function (err, conn) {
        if(!err) {
        callback(conn);
        }
    });
}

module.exports = getConnection;