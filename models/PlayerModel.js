const { Schema, model } = require('mongoose');

const PlayerSchema = new Schema({
  id: { type: String },
  sr_id: { type: String },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  full_name: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  abbr_name: { type: Object },
  height: { type: Number },
  weight: { type: Number },
  position: { type: String },
  primary_position: { type: String },
  jersey_number: { type: String },
  photo: { type: String }
});

module.exports = model('Player', PlayerSchema);