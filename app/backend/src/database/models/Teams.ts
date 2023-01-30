import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Team extends Model {
  declare id: number;
  declare name: string;
  declare teamName: string;
  declare homeMatches: {
    homeTeamGoals: number;
    awayTeamGoals: number;
  }[];
}

Team.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING(100),
    allowNull: false,
    field: 'team_name',
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Team',
  tableName: 'teams',
  timestamps: false,
});

export default Team;
