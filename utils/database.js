require('dotenv').config();
let $console = require('Console');

const { Client } = require('pg');

const db = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
});

db.connect()
    .then(() => {
        $console.success('Connected to database');
    })
    .catch((err) => {
        $console.error(err);
    });

module.exports = db;
