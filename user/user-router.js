const router = require('express').Router();
const DB = require('../knex-queries/model.js');

router.get('/', async (req, res) => {
  const allUsers = await DB.find('users');
  try {
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/assignment', async (req, res) => {
  const assignment = req.body;
  try {
    const addedAssignment = await DB.addAssignment(assignment);
    res.status(201).json(addedAssignment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/assignment', async (req, res) => {
  try {
    const allAssignments = await DB.find('assignments');
    res.status(201).json(allAssignments);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/assignment/:id', async (req, res) => {
  const assignNum = req.params.id;
  try {
    const assignment = await DB.getAssignment(assignNum);
    res.status(200).json(assignment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const student = await DB.getStudent(userId);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/:id/:subject', async (req, res) => {
  const userId = req.params.id;
  const study = req.params.subject;
  try {
    const newScore = await DB.addPoint([userId, study]);
    res.status(200).json(newScore);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/:id/:subject/subtract', async (req, res) => {
  const userId = req.params.id;
  const study = req.params.subject;
  try {
    const newScore = await DB.subtractPoint([userId, study]);
    res.status(200).json(newScore);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
