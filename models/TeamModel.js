const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
  id: { type: String },
  sr_id: { type: String },
  name: { type: String },
  market: { type: String },
  alias: { type: String },
  conference: { type: Object },
  division: { type: Object },
  players: [{ type: Schema.Types.String, ref: 'Player' }],
  team_logo_url: { type: String }
});

module.exports = model('Team', TeamSchema);