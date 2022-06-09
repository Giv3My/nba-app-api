const TeamModel = require('../models/TeamModel');
const PlayerModel = require('../models/PlayerModel');

const populate = async () => {
  const teams = await TeamModel.find();

  if (!teams.length) {
    return console.log('DB is empty now');
  }

  try {
    if (teams[0].players[0].split('')[0] !== 's') {
      throw Error;
    }

    teams.forEach(async (team) => {
      let result = [];

      const foundPlayers = await PlayerModel.find({ sr_id: { $in: team.players } });
      await PlayerModel.updateMany({ sr_id: { $in: team.players } }, { $set: { team: team._id } });
      result = foundPlayers.map(player => player._id);

      await TeamModel.findOneAndUpdate({ sr_id: team.sr_id }, { players: result });
    });
  } catch (e) {
    return console.log('Teams have already been populated');
  }

  return console.log('Teams were populated');
};

module.exports = populate;