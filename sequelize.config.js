const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:p@ssw0rd@localhost:8000/postgres',{
    dialect: 'postgres',
    logging: false,
});
module.exports = sequelize;