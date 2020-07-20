import { Deserializable } from './deserializable.model';
import { Team } from './team.model';

export class League implements Deserializable {
  id: string;
  name: string;
  sport: string;
  teams: Team[];

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
