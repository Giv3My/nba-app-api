module.exports = class PlayerDto {
  _id;
  id;
  sr_id;
  team;
  full_name;
  first_name;
  last_name;
  abbr_name;
  height;
  weight;
  position;
  primary_position;
  jersey_number;
  photo;
  __v;

  constructor(model) {
    this._id = model._id;
    this.id = model.id;
    this.sr_id = model.sr_id;
    this.team = model.team;
    this.full_name = model.full_name;
    this.first_name = model.first_name;
    this.last_name = model.last_name;
    this.abbr_name = model.abbr_name;
    this.height = model.height;
    this.weight = model.weight;
    this.position = model.position;
    this.primary_position = model.primary_position;
    this.jersey_number = model.jersey_number;
    this.photo = model.photo;
    this.__v = model.__v;
  };
};