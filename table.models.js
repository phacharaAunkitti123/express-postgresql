const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize.config.js');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    first_name: {
        type: DataTypes.STRING,
    },
    last_name:{
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    picture: {
        type: DataTypes.STRING
    }
},{
    timestamps: false,
    tableName: 'users',
});

module.exports = User;