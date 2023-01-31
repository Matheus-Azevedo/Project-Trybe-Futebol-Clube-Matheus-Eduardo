import { IHomeMatches } from '../interfaces/teams';

class AwayCalculator {
  public totalPoints = (matches: IHomeMatches[]) => matches.reduce((acc, match) => {
    if (match.homeTeamGoals < match.awayTeamGoals) {
      return acc + 3;
    } if (match.homeTeamGoals === match.awayTeamGoals) {
      return acc + 1;
    }
    return acc;
  }, 0);

  public totalVictories = (matches: IHomeMatches[]) => matches.reduce((acc, match) => {
    if (match.homeTeamGoals < match.awayTeamGoals) {
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
    if (match.homeTeamGoals > match.awayTeamGoals) {
      return acc + 1;
    }
    return acc;
  }, 0);

  public goalsFavor = (matches: IHomeMatches[]) => matches
    .reduce((acc, match) => acc + match.awayTeamGoals, 0);

  public goalsOwn = (matches: IHomeMatches[]) => matches
    .reduce((acc, match) => acc + match.homeTeamGoals, 0);
}

export default AwayCalculator;
