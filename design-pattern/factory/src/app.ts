import Conta from './conta'
import ContaFactory from './contaFactory'

const contaFactory = new ContaFactory()

const conta1: Conta = contaFactory.criar('poupanca')
const conta2: Conta = contaFactory.criar('corrente')

conta1.saldo = 1000

console.log(typeof conta1)
console.log(conta2.getSaldo())