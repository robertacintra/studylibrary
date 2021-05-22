export class CampoObrigatorioError extends Error {
    constructor(msg: string) {
        super(msg)
        this.name = 'CampoObrigatorioError'
    }
}