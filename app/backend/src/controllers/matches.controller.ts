import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import statusCode from '../utils/status.code';

class MatchesController {
  constructor(private _matchesService = new MatchesService()) {}

  public selectAllMatches = async (req: Request, res: Response) => {
    try {
      const matches = await this._matchesService.selectAllMatches();
      return res.status(statusCode.ok).json(matches);
    } catch (error: unknown) {
      return res.status(statusCode.internalServerError).json({ message: error });
    }
  };
}

export default MatchesController;
