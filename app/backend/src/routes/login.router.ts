import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import loginValidate from '../middlewares/login.middleware';
import authorizationValidate from '../middlewares/validate.middleware';

const loginRouter = Router();

const controller = new LoginController();

loginRouter.get('/validate', authorizationValidate, controller.validate.bind(controller));
loginRouter.post('/', loginValidate, controller.login.bind(controller));

export default loginRouter;
