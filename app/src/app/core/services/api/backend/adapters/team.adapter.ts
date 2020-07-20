import { ApiAdapter } from './adapter';
import { Team } from '../../../../../../models/team.model';
import { PlayerAdapter } from './player.adapter';

export class TeamAdapter extends ApiAdapter<Team> {
  private playerAdapter = new PlayerAdapter();

  get(data: any): Team {
    return new Team().deserialize({
      ...data,
      players: this.playerAdapter.list(data?.players),
    });
  }
}
