const { DataTypes } = require('sequelize')
const db = require('../db')
const UsuarioSchema = require('../usuarios/model')
const ProdutoSchema = require('../produtos/model')

const VendasSchema = db.define('vendas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        references: {
            model: UsuarioSchema,
            key: 'id'
        }
    },
    produtoId: {
        type: DataTypes.INTEGER,
        references: {
            model: ProdutoSchema,
            key: 'id'        
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
})

UsuarioSchema.belongsToMany(ProdutoSchema, { through: VendasSchema })
ProdutoSchema.belongsToMany(UsuarioSchema, { through: VendasSchema })

module.exports = VendasSchema