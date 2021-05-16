import express from 'express';
import { adapt } from '../adapter/expressRouter'
import CreateUserController from '../controllers/createUser';

const createUserController = new CreateUserController()
const router = express.Router()

router.post('/user', adapt(createUserController))

export default router