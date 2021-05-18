import EmpresaStrategy from "./empresaStrategy";

export default class Correios implements EmpresaStrategy{
    tarifaHR: number = 1
    tarifaKM: number = 3.0

    calculaFrete(distancia: number): string {
        return `${distancia * this.tarifaKM }`
    }

    calculaTempo(distancia: number): string {
        return ''
    }
}