import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import { IHomeMatches, ITeamScore, ITeamClassification } from '../interfaces/teams';

class LeaderboardService {
  public totalPoints = (matches: IHomeMatches[]) => matches.reduce((acc, match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      return acc + 3;
    } if (match.homeTeamGoals === match.awayTeamGoals) {
      return acc + 1;
    }
    return acc;
  }, 0);

  public totalVictories = (matches: IHomeMatches[]) => matches.reduce((acc, match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      return acc + 1;
    }
    return acc;
  }, 0);

  public totalDraws = (matches: IHomeMatches[]) => matches.reduce((acc, match) => {
    if (match.homeTeamGoals === match.awayTeamGoals) {
      return acc + 1;
    }
    return acc;
  }, 0);

  public totalLosses = (matches: IHomeMatches[]) => matches.reduce((acc, match) => {
    if (match.homeTeamGoals < match.awayTeamGoals) {
      return acc + 1;
    }
    return acc;
  }, 0);

  public goalsFavor = (matches: IHomeMatches[]) => matches
    .reduce((acc, match) => acc + match.homeTeamGoals, 0);

  public goalsOwn = (matches: IHomeMatches[]) => matches
    .reduce((acc, match) => acc + match.awayTeamGoals, 0);

  public leaderboard = (teams: ITeamScore[]) => {
    const showScore = teams.map((team) => {
      const score = {
        name: team.teamName,
        totalPoints: this.totalPoints(team.homeMatches),
        totalGames: team.homeMatches.length,
        totalVictories: this.totalVictories(team.homeMatches),
        totalDraws: this.totalDraws(team.homeMatches),
        totalLosses: this.totalLosses(team.homeMatches),
        goalsFavor: this.goalsFavor(team.homeMatches),
        goalsOwn: this.goalsOwn(team.homeMatches),
        goalsBalance: this.goalsFavor(team.homeMatches) - this.goalsOwn(team.homeMatches),
        efficiency: (
          (Number(this.totalPoints(team.homeMatches))
          / (team.homeMatches.length * 3)) * 100).toFixed(2),
      }; return score;
    }); return showScore;
  };

  public searchTeamsAndMatches = async () => {
    const teams = await Teams.findAll({
      include: [
        {
          model: Matches,
          as: 'homeMatches',
          attributes: ['homeTeamGoals', 'awayTeamGoals'],
          where: {
            inProgress: false,
          },
        },
      ],
    });
    return teams;
  };

  public orderLeaderboard = (table: ITeamClassification[]) => table
    .sort((a, b) => Number(b.totalPoints) - Number(a.totalPoints)
    || Number(b.totalVictories) - Number(a.totalVictories)
    || Number(b.goalsBalance) - Number(a.goalsBalance)
    || Number(b.goalsFavor) - Number(a.goalsFavor)
    || Number(b.goalsOwn) - Number(a.goalsOwn));

  public selectLeaderboardTable = async () => {
    const matchesBtTeam = await this.searchTeamsAndMatches();
    const leaderboard = this.leaderboard(matchesBtTeam);
    const orderLeaderboard = this.orderLeaderboard(leaderboard);
    return orderLeaderboard;
  };
}

export default LeaderboardService;
