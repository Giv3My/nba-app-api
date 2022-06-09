const router = require('express').Router();
const teamController = require('../controllers/teamController');
const playerController = require('../controllers/playerController');

router.get('/teams', teamController.getTeams);
router.get('/team/:id', teamController.getTeam);

router.get('/players', playerController.searchPlayers);
router.get('/playerStats/:id', playerController.getPlayerStats);

module.exports = router;