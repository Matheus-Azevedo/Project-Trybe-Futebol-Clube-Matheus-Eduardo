import TeamsModel from '../database/models/Teams';

class LeaderboardService {
  private _teams = TeamsModel;

  public selectLeaderboardTable = async () => {
    const leaderboard = await this._teams.findAll({
      attributes: ['name', 'points'],
      order: [['points', 'DESC']],
    });
    return leaderboard;
  };
}

export default LeaderboardService;
