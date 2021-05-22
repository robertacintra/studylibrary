import { AddUserUseCase } from "../domain/usecase/addUser"
import { CampoObrigatorioError } from "../errors/CampoObrigatorioError"
import { ParametroInvalidoError } from "../errors/ParametroInvalidoError"
import { badRequest } from "../helpers/http-helpers"
import { EmailValidator } from "../protocols/emailValidator"
import { HttpRequest, HttpResponse } from "../protocols/http"

export default class CreateUserController {
    emailValidator: EmailValidator
    addUser: AddUserUseCase
    constructor(emailValidator: EmailValidator, addUser: AddUserUseCase) {
        this.emailValidator = emailValidator
        this.addUser = addUser
    }

    handle(request: HttpRequest): HttpResponse {
        let { body } = request
        let requiredFields = ['nome', 'email', 'senha', 'confirmacaoSenha']
        for(let field of requiredFields) {
            if(!body[field]) {
                return badRequest(new CampoObrigatorioError(`O campo ${field} é obrigatorio`))
            }
        }
        let { senha, confirmacaoSenha, email, nome } = body

        if(senha !== confirmacaoSenha) {
            return badRequest(new ParametroInvalidoError('Senha e confirmação devem ser iguais'))
        }
        try{
            if(!this.emailValidator.isValid(email)) {
                return badRequest(new ParametroInvalidoError('Email com formato invalido'))
            }
        } catch(e) {
            return {
                status: 500,
                body: e
            }
        }
        
        const user = this.addUser.add({
            nome,
            email,
            senha
        })
        
        return {
            status: 200,
            body: user
        }
    }
}