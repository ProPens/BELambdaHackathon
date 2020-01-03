const express = require('express');

const occupations = require('./model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  const allCareers = await occupations.find('occupations');
  try {
    res.status(200).json(allCareers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:subject', async (req, res) => {
  const subject = req.params.subject;
  try {
    const career = await occupations.findSubject(subject);
    res.status(200).json(career);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
