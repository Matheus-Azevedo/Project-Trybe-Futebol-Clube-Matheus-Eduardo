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

Match.belongsTo(Teams, { as: 'homeTeam', foreignKey: 'home_team_id' });
Match.belongsTo(Teams, { as: 'awayTeam', foreignKey: 'away_team_id' });

Teams.hasMany(Match, { as: 'homeMatches', foreignKey: 'id' });
Teams.hasMany(Match, { as: 'awayMatches', foreignKey: 'id' });

export default Match;
