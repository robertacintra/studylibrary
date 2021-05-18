import Conta from './conta'

class ContaCorrente implements Conta{
    saldo: number
    nome: string

    constructor(saldo?: number, nome?: string) {
        this.saldo = saldo ? saldo : 0
        this.nome = nome ? nome : ''
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

export default ContaCorrente