import { Request, Response } from 'express';
import { Controller } from '../interfaces/controller'
import { HTTPRequest } from '../interfaces/http';

export const adapt = (controller: Controller) => {
    return (req: Request, res: Response) => {
        const request: HTTPRequest = {}
        request.body = req.body
        request.params = req.params
        request.query = req.query

        const response = controller.handle(request)

        res.status(response.status).json(response.body)
    }
}