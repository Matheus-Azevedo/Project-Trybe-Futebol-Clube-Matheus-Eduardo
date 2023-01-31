import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';
import statusCode from '../utils/statusCode.util';

class LeaderboardController {
  constructor(private _leaderboardService = new LeaderboardService()) {}

  public selectLeaderboardTable = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { path } = req;
      const leaderboard = await this._leaderboardService.selectLeaderboardTable(path);
      return res.status(statusCode.ok).json(leaderboard);
    } catch (error: unknown) {
      return res.status(statusCode.internalServerError).json({ message: error });
    }
  };

  public selectAllLeaderboardTable = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const leaderboard = await this._leaderboardService.selectAllLeaderboardTable();
      return res.status(statusCode.ok).json(leaderboard);
    } catch (error: unknown) {
      return res.status(statusCode.internalServerError).json({ message: error });
    }
  };
}

export default LeaderboardController;
