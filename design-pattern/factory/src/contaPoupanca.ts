import Conta from './conta'
class ContaPoupanca implements Conta {
    saldo: number
    nome: string
    taxaJuro: number

    constructor(saldo?: number, nome?: string, taxaJuro?: number) {
        this.saldo = saldo ? saldo : 0
        this.nome = nome ? nome : ''
        this.taxaJuro = taxaJuro ? taxaJuro : 0
    }

    sacar(): number {
        //
        return 0
    }

    depositar(valor: number) {

    }

    getSaldo(): number {
        return this.saldo
    }
}

export default ContaPoupanca