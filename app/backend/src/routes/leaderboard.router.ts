import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardRouter = Router();

const controller = new LeaderboardController();

leaderboardRouter.get('/', controller.selectAllLeaderboardTable.bind(controller));
leaderboardRouter.get('/home', controller.selectLeaderboardTable.bind(controller));
leaderboardRouter.get('/away', controller.selectLeaderboardTable.bind(controller));

export default leaderboardRouter;
