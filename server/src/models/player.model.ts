import { Schema, Document, model } from 'mongoose';

interface PlayerSignin {
  amount: number;
  currency: string;
}

export interface Player extends Document {
  name: string;
  position: string;
  thumbnail: string;
  signin: PlayerSignin;
  born: Date;
}

const PlayerSchema: Schema = new Schema({
  name: { type: String },
  position: { type: String },
  thumbnail: { type: String },
  signin: { type: Object },
  born: { type: Date },
});

export default model<Player>('players', PlayerSchema);
