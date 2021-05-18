export default interface EmpresaStrategy {
    tarifaKM: number
    tarifaHR: number

    calculaFrete(distancia: number): string
    calculaTempo(distancia: number): string
}