const router = require('express').Router()
const VendasSchema = require('./model')

router.post('/', async (req, res) => {
    await VendasSchema.create(req.body)
    res.status(201).send()
})

router.get('/', async (req, res) => {
    let vendas = await VendasSchema.findAll()
    res.status(200).json(vendas)
})

module.exports = router