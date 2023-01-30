import TeamsModel from '../database/models/Teams';
import Matches from '../database/models/Matches';
import statusCode from '../utils/statusCode.util';

class MatchesService {
  public selectAllMatches = async () => {
    const allMatches = await Matches.findAll({
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamsModel, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return allMatches;
  };

  public selectAllInProgressMatches = async (query: string) => {
    const allInProgressMatches = await Matches.findAll({
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
      const match = await Matches.create({
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
    const match = await Matches.findByPk(id);
    if (match) {
      await match.update({ inProgress: false });
      return { status: statusCode.ok, message: 'Finished' };
    }
    return { status: statusCode.notFound, message: 'There is no match with such!' };
  };

  public updateMatchInProgress = async (
    id: string,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) => {
    const match = await Matches.findByPk(id);
    if (match) {
      await match.update({ homeTeamGoals, awayTeamGoals });
      return match;
    }
    return null;
  };

  public allMatchesByTeamIdAndProgress = async (id: string, inProgress: boolean) => {
    const allMatches = await Matches.findAll({
      where: { homeTeamId: id, inProgress },
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return allMatches;
  };
}

export default MatchesService;
