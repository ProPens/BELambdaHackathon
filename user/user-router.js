
const router = require('express').Router();
const DB = require('../knex-queries/model.js');

router.get('/', async (req, res) => {
  const allUsers = await DB.find(users);
  try {
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
