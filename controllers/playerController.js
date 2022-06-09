const axios = require('axios');
const PlayerModel = require('../models/PlayerModel');
const PlayerDto = require('../dtos/player-dto');
const escapeRegex = require('../helpers/escapeRegex');

class TeamController {
  async getPlayerStats(req, res) {
    try {
      const { id } = req.params;
      const apiUrl = `${process.env.API_URL}/players/sr:player:${id}/profile.json?api_key=${process.env.API_KEY}`;

      const playerInfo = await PlayerModel.findOne({
        sr_id: `sr:player:${id}`,
      });

      if (!playerInfo) {
        return res.status(404).send('Player was not found');
      }

      const { data: playerStats } = await axios.get(apiUrl);
      const lastPlayerStats = playerStats['seasons'][0]['teams'][0]['total'];

      const playerDto = new PlayerDto(playerInfo);

      const playerProfile = {
        ...playerDto,
        team: playerStats.team,
        playerStats: lastPlayerStats,
        season: playerStats.seasons[0].year,
      };

      return res.json(playerProfile);
    } catch (e) {
      return res.status(404).send('Player was not found');
    }
  }

  async searchPlayers(req, res) {
    const { search } = req.query;

    if (!!search) {
      if (search.length > 2) {
        const regex = new RegExp(escapeRegex(search.toLowerCase()), 'gi');
        const foundPlayers = await PlayerModel.find({
          full_name: regex,
        }).populate('team', '_id sr_id');

        return foundPlayers.length ? res.json(foundPlayers) : res.sendStatus(404);
      } else {
        return res.status(500).json({ error: 'Too many results' });
      }
    } else {
      return res.json([]);
    }
  }
}

module.exports = new TeamController();
