class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    toString() {
        return `${this.nome} ${this.idade}`
    }
    
    comprarCarro() {
        throw new Error('Programador não')
    }
}

module.exports = Pessoa