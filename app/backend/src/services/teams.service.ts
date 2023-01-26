import Teams from '../database/models/Teams';

class TeamsService {
  private _teams = Teams;

  selectAllTeams = async (): Promise<Teams[]> => {
    const teams = await this._teams.findAll();
    return teams;
  };
}

export default TeamsService;
