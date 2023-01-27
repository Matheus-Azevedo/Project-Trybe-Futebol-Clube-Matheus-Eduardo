import { Model, INTEGER } from 'sequelize';
import db from '.';

import Teams from './Teams';

class Match extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare awayTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_id',
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_id',
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: INTEGER,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'match',
  timestamps: false,
});

Match.belongsTo(Teams, { as: 'homeTeam', foreignKey: 'homeTeamId' });
Match.belongsTo(Teams, { as: 'awayTeam', foreignKey: 'awayTeamId' });

Teams.hasMany(Match, { as: 'homeMatches', foreignKey: 'homeTeamId' });
Teams.hasMany(Match, { as: 'awayMatches', foreignKey: 'awayTeamId' });

export default Match;
