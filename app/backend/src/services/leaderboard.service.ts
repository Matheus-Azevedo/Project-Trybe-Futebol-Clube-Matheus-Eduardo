import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import { ITeamScore, ITeamClassification } from '../interfaces/teams';
import HomeCalculator from '../utils/homeCalculator';
import AwayCalculator from '../utils/awayCalculator';

class LeaderboardService {
  private _homeCalculator = new HomeCalculator();
  private _awayCalculator = new AwayCalculator();
  private _leaderboard: ITeamClassification[] = [];

  public leaderboard = (teams: ITeamScore[]) => {
    const showScore = teams.map((team) => {
      const score = {
        name: team.teamName,
        totalPoints: this._homeCalculator.totalPoints(team.homeMatches),
        totalGames: team.homeMatches.length,
        totalVictories: this._homeCalculator.totalVictories(team.homeMatches),
        totalDraws: this._homeCalculator.totalDraws(team.homeMatches),
        totalLosses: this._homeCalculator.totalLosses(team.homeMatches),
        goalsFavor: this._homeCalculator.goalsFavor(team.homeMatches),
        goalsOwn: this._homeCalculator.goalsOwn(team.homeMatches),
        goalsBalance: this._homeCalculator
          .goalsFavor(team.homeMatches) - this._homeCalculator.goalsOwn(team.homeMatches),
        efficiency: (
          (Number(this._homeCalculator.totalPoints(team.homeMatches))
          / (team.homeMatches.length * 3)) * 100).toFixed(2),
      }; return score;
    }); return showScore;
  };

  public leaderboardAway = (teams: ITeamScore[]) => {
    const showScore = teams.map((team) => {
      const score = {
        name: team.teamName,
        totalPoints: this._awayCalculator.totalPoints(team.awayMatches),
        totalGames: team.awayMatches.length,
        totalVictories: this._awayCalculator.totalVictories(team.awayMatches),
        totalDraws: this._awayCalculator.totalDraws(team.awayMatches),
        totalLosses: this._awayCalculator.totalLosses(team.awayMatches),
        goalsFavor: this._awayCalculator.goalsFavor(team.awayMatches),
        goalsOwn: this._awayCalculator.goalsOwn(team.awayMatches),
        goalsBalance: this._awayCalculator
          .goalsFavor(team.awayMatches) - this._awayCalculator.goalsOwn(team.awayMatches),
        efficiency: (
          (Number(this._awayCalculator.totalPoints(team.awayMatches))
          / (team.awayMatches.length * 3)) * 100).toFixed(2),
      }; return score;
    }); return showScore;
  };

  public orderLeaderboard = (table: ITeamClassification[]) => table
    .sort((a, b) => Number(b.totalPoints) - Number(a.totalPoints)
    || Number(b.totalVictories) - Number(a.totalVictories)
    || Number(b.goalsBalance) - Number(a.goalsBalance)
    || Number(b.goalsFavor) - Number(a.goalsFavor)
    || Number(b.goalsOwn) - Number(a.goalsOwn));

  public searchTeamsAndMatches = async (path: string) => {
    const as = path === '/home' ? 'homeMatches' : 'awayMatches';
    const teams = await Teams.findAll({
      include: [
        {
          model: Matches,
          as,
          attributes: ['homeTeamGoals', 'awayTeamGoals'],
          where: {
            inProgress: false,
          },
        },
      ],
    });
    return teams;
  };

  public selectLeaderboardTable = async (path: string) => {
    const matchesByTeam = await this.searchTeamsAndMatches(path);
    if (path === '/home') {
      this._leaderboard = this.leaderboard(matchesByTeam);
    }
    this._leaderboard = this.leaderboardAway(matchesByTeam);
    const orderedLeaderboard = this.orderLeaderboard(this._leaderboard);
    return orderedLeaderboard;
  };
}

export default LeaderboardService;
