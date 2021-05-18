interface Conta {
    saldo: number
    nome: string

    sacar(): number
    depositar(valor: number): void
    getSaldo(): number 
}

export default Conta