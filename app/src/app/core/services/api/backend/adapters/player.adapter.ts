import { ApiAdapter } from './adapter';
import { Player } from '../../../../../../models/player.model';
import { parseISO } from 'date-fns';

export class PlayerAdapter extends ApiAdapter<Player> {

  get(data: any): Player {
    return new Player().deserialize({
      ...data,
      born: parseISO(data.born)
    });
  }
}
