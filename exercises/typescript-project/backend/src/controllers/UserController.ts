import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Roberta', email: 'roberta.cintra@alumni.usp.br' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail(
            { name: 'Roberta Cintra', email: 'roberta.cintra@alumni.usp.br' },
            { subject: 'Bem-vindo ao sistema', body: 'Seja bem-vinde!' }
        );

        return res.json()
    }
};