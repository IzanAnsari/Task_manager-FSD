// database/connection.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('taskmanager', 'Izan', 'Izan@123', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize
  .sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((err) => {
    console.error('Error synchronizing database:', err);
  });

module.exports = sequelize;
