import { Schema, Document, model } from 'mongoose';

import { Player } from './player.model';

export interface Team extends Document {
  name: string;
  thumbnail: string;
  players: Player['_id'][];
}

const PlayerSchema: Schema = new Schema({
  name: { type: String },
  thumbnail: { type: String },
  players: [{ type: Schema.Types.ObjectId, ref: 'players' }],
});

export default model<Team>('teams', PlayerSchema);
