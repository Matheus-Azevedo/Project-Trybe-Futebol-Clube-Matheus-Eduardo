import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';
import statusCode from '../utils/status.code';

class TeamsController {
  constructor(private _teamsService = new TeamsService()) {}

  selectAllTeams = async (_req: Request, res: Response) => {
    try {
      const result = await this._teamsService.selectAllTeams();
      return res.status(statusCode.ok).json(result);
    } catch (error: unknown) {
      return res.status(statusCode.internalServerError).json({ message: error });
    }
  };
}

export default TeamsController;
