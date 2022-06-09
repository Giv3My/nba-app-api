const router = require('express').Router();

router.get('*', (req, res) => {
  return res.status(404).json({
    type: 'Client error',
    error: 'Invalid route',
  });
});

module.exports = router;
