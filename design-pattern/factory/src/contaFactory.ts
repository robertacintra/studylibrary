import Conta from "./conta";
import ContaCorrente from "./contaCorrente";
import ContaPoupanca from "./contaPoupanca";

class ContaFactory {
    criar(tipo: string): Conta {

        let conta: Conta

        if(tipo == 'poupanca') 
            return new ContaPoupanca()

        return new ContaCorrente()
    }
}

export default ContaFactory