const TeamModel = require('../models/TeamModel');

class TeamController {
  async getTeams(req, res) {
    const teams = await TeamModel.find().sort({ sr_id: 'asc' });

    return res.json(teams);
  };

  async getTeam(req, res) {
    try {
      const { id } = req.params;
      const team = await TeamModel.findOne({ sr_id: id }).populate('players');

      if (!team) {
        return res.status(404).send('Team was not found');
      }

      return res.json(team);
    } catch (e) {
      return res.status(404).send('Team was not found');
    }
  };
};

module.exports = new TeamController();