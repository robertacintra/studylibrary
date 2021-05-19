const db = require('../db')
const Sequelize = require('sequelize')

const UserModel = db.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    cpf: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
})

module.exports = UserModel