let $console = require('Console');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');

const server = express();
const port = process.env.PORT || 5000;

const router = require('./routes/router')(server);
const db = require('./utils/database');

global.db = db;

server.use(express.json());
server.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
server.use(logger('dev'));
server.use(helmet());
server.use(express.urlencoded({ extended: false }));

server.listen(port, () => {
    $console.success(`[√] Server is listening on port ${port}`);
});

module.exports = server;