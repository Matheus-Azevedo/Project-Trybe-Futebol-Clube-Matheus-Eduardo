import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';
import statusCode from '../utils/statusCode.util';

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

  selectTeamById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this._teamsService.selectTeamById(id);
      return res.status(statusCode.ok).json(result);
    } catch (error: unknown) {
      return res.status(statusCode.internalServerError).json({ message: error });
    }
  };
}

export default TeamsController;
