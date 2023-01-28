import TeamsModel from '../database/models/Teams';
import Matches from '../database/models/Matches';
import statusCode from '../utils/status.code';

class MatchesService {
  private _matches = Matches;

  public selectAllMatches = async () => {
    const allMatches = await this._matches.findAll({
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamsModel, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return allMatches;
  };

  public selectAllInProgressMatches = async (query: string) => {
    const allInProgressMatches = await this._matches.findAll({
      where: { inProgress: query === 'true' },
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamsModel, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return allInProgressMatches;
  };

  public createMatchInProgress = async (
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) => {
    const homeTeam = await TeamsModel.findByPk(homeTeamId);
    const awayTeam = await TeamsModel.findByPk(awayTeamId);
    if (homeTeam && awayTeam) {
      const match = await this._matches.create({
        homeTeamId,
        awayTeamId,
        homeTeamGoals,
        awayTeamGoals,
        inProgress: true,
      });
      return match;
    }
    return null;
  };

  public updateMatch = async (id: string) => {
    const match = await this._matches.findByPk(id);
    if (match) {
      await match.update({ inProgress: false });
      return { status: statusCode.ok, message: 'Finished' };
    }
    return { status: statusCode.notFound, message: 'There is no match with such!' };
  };
}

export default MatchesService;
