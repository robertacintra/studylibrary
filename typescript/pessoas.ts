enum Cidade {
    FLN = 'Florianópolis',
    SP = 'São Paulo',
    RJ = 'Rio de Janeiro',
    MG = 'Minas Gerais'
}

interface Models<T> {
    id: T, 
    toString(): string
}

// type Cidade = 'Florianópolis' | 'São Paulo' | 'Curitiba'

class Produto implements Models<string> {
    id: string
}

class Pessoa<T> implements Models<T> {
    id: T;
    // readonly 
    nome: string;
    idade: number;
    cidade: Cidade;

    constructor(id:T, nome: string, idade: number, cidade?: Cidade) {
        this.id = id
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
    }

    toString(): string {
        return `${this.nome} tem ${this.idade} anos e mora em ${this.cidade}.`
    }
}

export {
    Pessoa,
    Cidade
}