export interface IHomeMatches {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface ITeamScore {
  id: number;
  teamName: string;
  homeMatches: IHomeMatches[];
}

export interface ITeamClassification {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}
