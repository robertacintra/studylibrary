const router = require('express').Router()
const ProdutosModel = require('./model')
const Validator = require('../validator')

const requiredFields = {
    nome: {
        required: true,
        customValidate: {
            isValid: (nome) => {
                return nome.length <= 100
            },
            msg: 'O campo nome tem um limite de 100'
        }
    }
}

const produtoValidator = new Validator(requiredFields)
router.post('/', produtoValidator.getValidator(), async (req, res) => {
    let { body } = req
    await ProdutosModel.create(body)
    res.status(201).send()
})

router.get('/', async (req, res) => {
    let produtos = await ProdutosModel.findAll({ include: 'usuarios'})
    res.status(200).json(produtos)
})

router.delete('/:id', async (req, res) => {
    let { id } = req.params
    await ProdutosModel.destroy({where: {id: id}})
    res.status(200).send()
})

router.put('/:id', async (req, res) => {
    let { id } = req.params
    let produto = await ProdutosModel.findOne({where: {id: id}})
    
    let { nome, descricao, preco, estoque } = req.body
    console.log(nome)
    
    produto.nome = nome ? nome : produto.nome
    produto.descricao = descricao ? descricao : produto.descricao
    produto.preco = preco ? preco : produto.preco
    produto.estoque = estoque ? estoque : produto.estoque
    produto.save()
    res.status(200).json(produto)
})

module.exports = router