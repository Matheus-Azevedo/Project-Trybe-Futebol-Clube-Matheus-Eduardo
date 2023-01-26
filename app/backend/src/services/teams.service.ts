import Teams from '../database/models/Teams';

class TeamsService {
  private _teams = Teams;

  selectAllTeams = async (): Promise<Teams[]> => {
    const teams = await this._teams.findAll();
    return teams;
  };

  selectTeamById = async (id: string): Promise<Teams | null> => {
    const team = await this._teams.findByPk(id);
    return team;
  };
}

export default TeamsService;
