const express = require('express');
const cors = require('cors');

require('dotenv').config(); // allows data in .env file to be accessed from anywhere via 'process.env'

const server = express();

server.use(cors());

server.get('/', (req, res) => {
  res.send('<h2>API is up and running</h2>');
});

module.exports = server;