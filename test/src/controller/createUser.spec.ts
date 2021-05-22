import { AddUserUseCase } from '../domain/usecase/addUser'
import { EmailValidator } from '../protocols/emailValidator'
import CreateUserController from './createUser'

const makeEmailValidator = () => {
    class EmailValidatorFake implements EmailValidator {
        isValid(email: string): boolean {
            return true
        }
    }
    return new EmailValidatorFake()
}

const makeAddUser = () => {
    class AddUserFake implements AddUserUseCase {
        add(user: any): any {
            return user
        }
    }
    return new AddUserFake()
}

const makeController = () => {
    const addUser = makeAddUser()
    const emailValidator = makeEmailValidator()
    const controller = new CreateUserController(emailValidator, addUser)
    return {
        controller,
        emailValidator,
        addUser
    }
}

describe('Testes do CreateUserController', () => {
    test('Deve retornar 400 se nome não for enviado', () => {
        let {controller} = makeController()

        let request = {
            body: {
                email: 'andrepatricio@dh.com',
                senha: 'senha',
                confirmacaoSenha: 'senha'
            }
        }

        let resultado = controller.handle(request)

        expect(resultado.status).toBe(400)
        expect(resultado.body).toEqual(new Error('O campo nome é obrigatorio'))
    })

    test('Deve retornar 400 se email não for enviado', () => {
        let {controller} = makeController()

        let request = {
            body: {
                nome: 'andre',
                senha: 'senha',
                confirmacaoSenha: 'senha'
            }
        }

        let resultado = controller.handle(request)

        expect(resultado.status).toBe(400)
        expect(resultado.body).toEqual(new Error('O campo email é obrigatorio'))
    })

    test('Deve retornar 400 se senha não for enviado', () => {
        let {controller} = makeController()

        let request = {
            body: {
                nome: 'andre',
                email: 'andre@dh.com',
                confirmacaoSenha: 'senha'
            }
        }

        let resultado = controller.handle(request)

        expect(resultado.status).toBe(400)
        expect(resultado.body).toEqual(new Error('O campo senha é obrigatorio'))
    })

    test('Deve retornar 400 se confirmacaoSenha não for enviado', () => {
        let {controller} = makeController()

        let request = {
            body: {
                nome: 'andre',
                email: 'andre@dh.com',
                senha: 'senha'
            }
        }

        let resultado = controller.handle(request)

        expect(resultado.status).toBe(400)
        expect(resultado.body).toEqual(new Error('O campo confirmacaoSenha é obrigatorio'))
    })

    test('Deve retornar 400 se confirmacaoSenha não for igual senha', () => {
        let {controller} = makeController()

        let request = {
            body: {
                nome: 'andre',
                email: 'andre@dh.com',
                senha: 'senha',
                confirmacaoSenha: 'senha1'
            }
        }

        let resultado = controller.handle(request)

        expect(resultado.status).toBe(400)
        expect(resultado.body).toEqual(new Error('Senha e confirmação devem ser iguais'))
    })

    test('Deve retornar 400 se o email fornecido for invalido', () => {
        let {controller, emailValidator} = makeController()

        jest.spyOn(emailValidator, 'isValid').mockReturnValueOnce(false)

        let request = {
            body: {
                nome: 'andre',
                email: 'and',
                senha: 'senha',
                confirmacaoSenha: 'senha'
            }
        }

        let resultado = controller.handle(request)

        expect(resultado.status).toBe(400)
        expect(resultado.body).toEqual(new Error('Email com formato invalido'))
    })

    test('Deve chamar o validador passando o parametro correto', () => {
        let {controller, emailValidator} = makeController()

        const spy = jest.spyOn(emailValidator, 'isValid')

        let request = {
            body: {
                nome: 'andre',
                email: 'and@dh.com',
                senha: 'senha',
                confirmacaoSenha: 'senha'
            }
        }

        controller.handle(request)

        expect(spy).toHaveBeenCalledWith(request.body.email)
    })

    test('Deve retornar 500 quando emailValidator lançar uma error', () => {
        let {controller, emailValidator} = makeController()

        jest.spyOn(emailValidator, 'isValid').mockImplementationOnce(() => {
            throw new Error()
        })

        let request = {
            body: {
                nome: 'andre',
                email: 'and@dh.com',
                senha: 'senha',
                confirmacaoSenha: 'senha'
            }
        }

        let resultado = controller.handle(request)

        expect(resultado.status).toBe(500)
    })

    test('Deve retornar 200 quando a request estiver correta', () => {
        let { controller } = makeController()

        let request = {
            body: {
                nome: 'andre',
                email: 'and@dh.com',
                senha: 'senha',
                confirmacaoSenha: 'senha'
            }
        }

        let resultado = controller.handle(request)

        expect(resultado.status).toBe(200)
        expect(resultado.body).toEqual({
            nome: 'andre',
            email: 'and@dh.com',
            senha: 'senha',
        })
    })

    test('Deve chamar o use case com os parametros corretos', () => {
        let { controller, addUser } = makeController()

        const spy = jest.spyOn(addUser, 'add') 

        let request = {
            body: {
                nome: 'andre',
                email: 'and@dh.com',
                senha: 'senha',
                confirmacaoSenha: 'senha'
            }
        }

        controller.handle(request)

        expect(spy).toHaveBeenCalledWith({
            nome: 'andre',
            email: 'and@dh.com',
            senha: 'senha'
        })
    })
})