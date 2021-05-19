class Validator {
    constructor(schema) {
        this.schema = schema
    }

    getValidator() {
        return (req, res, next) => { 
            let { body } = req
            for(let field in this.schema) {
                let { required, customValidate } = this.schema[field]
                if(!body[field] && required) {
                    res.status(400).send(`O campo ${field} é obrigatorio`)
                    return
                }
                if(customValidate && !customValidate.isValid(body[field])) {
                    res.status(400).send(customValidate.msg)
                    return
                }
            }
            next()
        }
    }
}

module.exports = Validator