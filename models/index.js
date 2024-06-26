const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js')[process.env.NODE_ENV || 'development'];

// Initialize Sequelize with the appropriate configuration
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  logging: console.log, // Enable logging for debugging purposes
});

// Define your User model
const db = {
  sequelize,
  Sequelize,
  Users: require('./Users.js')(sequelize, DataTypes), // Adjust the path to your user model
};

// Authenticate the database connection and log the result
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Sync all defined models to the DB
sequelize.sync({ alter: true }) // `alter` will update the schema to match the models
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing the database:', err);
  });

module.exports = db;



