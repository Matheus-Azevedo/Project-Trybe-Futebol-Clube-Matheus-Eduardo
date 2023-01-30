import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';
import statusCode from '../utils/statusCode.util';

class LeaderboardController {
  constructor(private _leaderboardService = new LeaderboardService()) {}

  public selectLeaderboardTable = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const leaderboard = await this._leaderboardService.selectLeaderboardTable();
      return res.status(statusCode.ok).json(leaderboard);
    } catch (error: unknown) {
      return res.status(statusCode.internalServerError).json({ message: error });
    }
  };
}

export default LeaderboardController;
