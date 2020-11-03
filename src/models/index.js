const { Sequelize, DataTypes } = require('sequelize');
const user = require('./user');
const message = require('./message');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

const models = {
  User: user(sequelize, DataTypes),
  Message: message(sequelize, DataTypes),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

exports.sequelize = sequelize;
exports.models = models;