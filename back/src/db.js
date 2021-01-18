const Sequelize = require('sequelize');

const db = new Sequelize('postgres://postgres:armando1@localhost:5432/login', { 
  logging: false, 
});

module.exports = db;