import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import { authorizationValidate, idTeamsValidate } from '../middlewares/matches.middleware';

const matchesRouter = Router();

const controller = new MatchesController();

matchesRouter.get('/:id', controller.allMatchesByTeamIdAndProgress.bind(controller));
matchesRouter.get('/', controller.selectMatches.bind(controller));
matchesRouter.post(
  '/',
  authorizationValidate,
  idTeamsValidate,
  controller.createMatchInProgress.bind(controller),
);
matchesRouter.patch('/:id/finish', controller.updateMatch.bind(controller));
matchesRouter.patch('/:id', controller.updateMatchInProgress.bind(controller));

export default matchesRouter;
