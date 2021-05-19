interface Colaborador {
    remuneracao()
}


class empregadoClt implements Colaborador {
    remuneracao() {
        ///
        return 1000
    }
}

class estagiario implements Colaborador {
    remuneracao() {
        ///
        return 346
    }
}

class empregadoPJ implements Colaborador {
    remuneracao() {
        ///
        return 1700
    }
}

class voluntarios implements Colaborador {
    remuneracao() {
        ///
    }
}


class fatura {
    saldo
    fecharFolha(colaborador) {
        this.saldo += colaborador.remuneracao()
    }
}