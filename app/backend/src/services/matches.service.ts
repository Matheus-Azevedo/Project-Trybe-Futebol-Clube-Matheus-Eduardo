import TeamsModel from '../database/models/Teams';
import Matches from '../database/models/Matches';

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
}

export default MatchesService;
