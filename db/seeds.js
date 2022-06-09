const mongoose = require('mongoose');
const connectDB = require('./index');
const TeamModel = require('../models/TeamModel');
const PlayerModel = require('../models/PlayerModel');
require('dotenv').config();

const seedTeams = async () => {
  const { teams } = require('../nba-data/teams.json');

  await TeamModel.deleteMany({});
  await TeamModel.insertMany(teams);
};

const seedPlayers = async () => {
  const { players } = require('../nba-data/players.json');

  await PlayerModel.deleteMany({});
  await PlayerModel.insertMany(players);
};

const seeding = async () => {
  try {
    await connectDB('Seeding database...');

    await seedTeams();
    await seedPlayers();
  } catch (e) {
    console.log(e);
  }
};

seeding().then(() => {
  mongoose.connection.close();
});