interface Aves {
    emitirSom()
}

interface AvesQueVoam extends Aves {
    altitude()
}

class Curio implements AvesQueVoam {
    emitirSom() {
        //
    }

    altitude() {
        //
    }
}

class Galo implements Aves {
    emitirSom() {

    }
}