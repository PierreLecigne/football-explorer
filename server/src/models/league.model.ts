import { Schema, Document, model } from "mongoose";

import { Team } from "./team.model"

export interface League extends Document {
  name: string;
  sport: string;
  teams: Team['_id'][];
}

const LeagueSchema: Schema = new Schema({
  name: { type: String },
  sport: { type: String },
  teams: [{ type: Schema.Types.ObjectId, ref: 'teams' }],
});

export default model<League>('leagues', LeagueSchema);
