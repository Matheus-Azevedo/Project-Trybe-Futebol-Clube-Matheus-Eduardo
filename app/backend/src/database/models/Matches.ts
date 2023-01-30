import { Model, INTEGER, BOOLEAN } from 'sequelize';
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
    allowNull: false,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
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
    type: BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Matches',
  tableName: 'matches',
  timestamps: false,
});

Match.belongsTo(Teams, { foreignKey: 'home_team_id', as: 'homeTeam' });
Match.belongsTo(Teams, { foreignKey: 'away_team_id', as: 'awayTeam' });

Teams.hasMany(Match, { foreignKey: 'homeTeamId', as: 'homeMatches' });
Teams.hasMany(Match, { foreignKey: 'awayTeamId', as: 'awayMatches' });

export default Match;
