const Sequelize = require('sequelize');
const sequelize = new Sequelize('userdb', 'root', 'root', {
  host: 'host',
  dialect: 'dialect',
  operatorsAliases: false,
 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});