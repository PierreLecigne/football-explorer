import { Deserializable } from './deserializable.model';

export class Player implements Deserializable {
  id: string;
  name: string;
  position: string;
  thumbnail: string;
  signin: {
    amount: number;
    currency: string;
  };
  born: Date;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
