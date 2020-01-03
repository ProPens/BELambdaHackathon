const router = require('express').Router();
const jwt = require('jsonwebtoken');

const environment = process.env.NODE_ENV || 'development';
const DB = require('../knex-queries/model.js');
const bcrypt = require('bcryptjs');
// require('../local_config/secrets.js');
const secrets = environment == 'development'
    ? require('../local_config/secrets.js')
    : require('./secrets.js');

router.get('/', async (req, res) => {
  const allUsers = await DB.find('users');
  try {
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/register', async (req, res) => {
  const user = req.body;
  if (!(user.username && user.password && user.email)) {
    res.status(406).json({ error: 'Valid Username and Password Required' });
  } else {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    try {
      const userAdded = await DB.addUser(user);
      res.status(201).json(userAdded);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

router.post('/login', async (req, res) => {
  try {
    if (!(req.body.username && req.body.password)) {
      res.status(406).json({ error: 'Invalid Username or Password' });
    } else {
      let { username, password } = req.body;
      const user = await DB.login({ username }).first();
      bcrypt.compareSync(password, user.password);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = genToken(user);
        res.status(202).json({ id: user.id, username: user.username, token });
      } else {
        res.status(406).json({ message: 'Invalid Credentials' });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

function genToken(user) {
  const payload = {
    userid: user.id,
    username: user.username
  };

  const options = { expiresIn: '2h' };
  const token = jwt.sign(payload, secrets.jwtSecret, options);

  return token;
}

module.exports = router;
