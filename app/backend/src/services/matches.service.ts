import Matches from '../database/models/Matches';

class MatchesService {
  private _matches = Matches;

  public selectAllMatches = async () => {
    const matches = await this._matches.findAll();
    return matches;
  };
}

export default MatchesService;
