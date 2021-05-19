const Pessoa = require('./pessoa');

test('André, 30', () => {
    let andre = new Pessoa('André', 30)

    expect(andre.toString()).toBe('André, 30')
})