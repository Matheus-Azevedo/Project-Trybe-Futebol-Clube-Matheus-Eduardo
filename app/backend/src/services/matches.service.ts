import Matches from '../database/models/Matches';

class MatchesService {
  private _matches = Matches;

  public selectAllMatches = async () => {
    const allMatches = await this._matches.findAll();
    return allMatches;
  };

  public selectAllInProgressMatches = async (query: string) => {
    const allInProgressMatches = await this._matches.findAll({
      where: { inProgress: query === 'true' },
    });
    return allInProgressMatches;
  };
}

export default MatchesService;
