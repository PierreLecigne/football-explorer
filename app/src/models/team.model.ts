import { Deserializable } from './deserializable.model';
import { Player } from './player.model';

export class Team implements Deserializable {
  id: string;
  name: string;
  thumbnail: string;
  players: Player[];

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
