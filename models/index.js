const { Sequelize } = require('sequelize');
const config = require('../config/config.js')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  logging: console.log, // Enable logging for debugging purposes
});

const db = {
  sequelize,
  Sequelize,
  Users: require('./Users.js')(sequelize, Sequelize)
};

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;



