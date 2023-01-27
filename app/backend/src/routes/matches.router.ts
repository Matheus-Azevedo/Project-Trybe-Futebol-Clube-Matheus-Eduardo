import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import authorizationValidate from '../middlewares/matches.middleware';

const matchesRouter = Router();

const controller = new MatchesController();

matchesRouter.get('/', controller.selectMatches.bind(controller));
matchesRouter.post('/', authorizationValidate, controller.createMatchInProgress.bind(controller));

export default matchesRouter;
