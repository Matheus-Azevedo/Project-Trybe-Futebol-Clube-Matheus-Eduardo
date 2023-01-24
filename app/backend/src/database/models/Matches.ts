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
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'match',
  timestamps: false,
});

Teams.belongsTo(Match, { foreignKey: 'homeTeamId', as: 'id' });
Teams.belongsTo(Match, { foreignKey: 'awayTeamId', as: 'id' });

Match.hasMany(Teams, { foreignKey: 'homeTeamId', as: 'id' });
Match.hasMany(Teams, { foreignKey: 'awayTeamId', as: 'id' });

export default Match;
