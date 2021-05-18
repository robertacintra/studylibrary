import EmpresaStrategy from "./empresaStrategy";

export default class MercadoLivre implements EmpresaStrategy{
    tarifaHR: number = 1
    tarifaKM: number = 3.0
    imposto: number = 7.0

    calculaFrete(distancia: number): string {
        return `${distancia * this.tarifaKM * this.imposto}`
    }

    calculaTempo(distancia: number): string {
        return ''
    }
}