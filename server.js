const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('<h2>API is up and running</h2>');
});

module.exports = server;