import { ApiAdapter } from './adapter';
import { League } from '../../../../../../models/league.model';

export class LeagueAdapter extends ApiAdapter<League> {

  get(data: any): League {
    return new League().deserialize({
      ...data,
      id: data._id,
    });
  }
}
