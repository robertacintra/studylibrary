import { Controller } from '../interfaces/controller';
import { HTTPRequest, HTTPResponse } from '../interfaces/http';

class CreateUserController implements Controller {
    handle(request: HTTPRequest): HTTPResponse {
        let { body } = request
        let requestFields = ['name', 'email', 'password', 'passwordConfirmation']
        for (let field of requestFields) {
            if (body[field]) {
                return {
                    status: 400
                }
            }
        }

        let { password, passwordValidation } = body

        if (password != passwordValidation) {
            return {
                status: 400
            }
        }

        return {
            status: 200
        }
    }
}

export default CreateUserController