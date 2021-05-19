const somar = require('./somar')
test('Deve retornar 2 ao somar 1 + 1', () => {
    expect(somar(1, 1)).toBe(2)
})
test('Deve retornar 3 ao somar 1 + 1 + 1', () => {
    expect(somar(1, 1, 1)).toBe(3)
})
test('Deve retornar 6 ao somar 1 + 1 + 1 + 1 + 1 +1 ', () => {
    expect(somar(1, 1, 1, 1, 1, 1)).toBe(6)
})