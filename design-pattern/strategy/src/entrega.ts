import EmpresaStrategy from './empresaStrategy';

export default class Entrega {
    empresa: EmpresaStrategy
    distancia: number

    constructor(empresa: EmpresaStrategy, distancia: number) {
        this.empresa = empresa
        this.distancia = distancia
    }

    calcularFrete(): string {
        return this.empresa.calculaFrete(this.distancia)
    }

    calcularTempo(): string {
        return this.empresa.calculaTempo(this.distancia)
    }
}