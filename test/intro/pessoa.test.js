const { test, expect } = require('@jest/globals')
const Pessoa = require('./pessoa')

test('toString', () => {
    let andre = new Pessoa('André', 30)

    expect(andre.toString()).toBe('André, 30')
})

test('toEqual objeto', () => {
    let andre = new Pessoa('André', 30)

    let pessoaFake = {
        nome: 'André',
        idade: 30
    }

    expect(pessoaFake).toEqual(andre)
})

test('toEqual array', () => {
    let andre = new Pessoa('André', 30, ['Ferrari', 'Uno'])

    expect(andre.carros).toEqual(['Ferrari', 'Uno'])
})

test('', ()=> {
    let andre = new Pessoa('André', 30, ['Ferrari', 'Uno'])

    expect(andre.idade).toBeLessThan(31)
})

test('', ()=> {
    let andre = new Pessoa('André', 30, ['Ferrari', 'Uno'])

    expect(andre.nome).toMatch(/And/)
})

test('', ()=> {
    let andre = new Pessoa('André', 30, ['Ferrari', 'Uno'])

    expect(andre.carros).toContain('Ferrari')
})


test('', ()=> {
    let andre = new Pessoa('André', 30, ['Ferrari', 'Uno'])

    expect(() => andre.comprarCarro()).toThrow(new Error('Programador não'))
})