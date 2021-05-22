export class ParametroInvalidoError extends Error {
    constructor(msg: string) {
        super(msg)
        this.name = 'ParametroInvalidoError'
    }
}