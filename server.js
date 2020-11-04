require('dotenv').config(); // allows data in .env file to be accessed from anywhere via 'process.env'

const express = require('express');
const cors = require('cors');
const { models } = require('./src/models');

const server = express();

server.use(cors());

server.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('Jaytee'),
  };

  next();
});

server.get('/', (req, res) => {
  res.send('<h2>API is up and running</h2>');
});

module.exports = server;