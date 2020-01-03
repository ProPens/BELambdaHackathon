const router = require('express').Router();
const jwt = require('jsonwebtoken');

// const environment = process.env.NODE_ENV || 'development';
const DB = require('../knex-queries/model.js');
const bcrypt = require('bcryptjs');
// const secrets = process.env.JWT_SECRET;

// const secrets = require('../local_config/secrets.js');
const secrets = 'canoodle';

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

      console.log(password, user.password);
      bcrypt.compareSync(password, user.password);
      console.log('horse here');
      if (user && bcrypt.compareSync(password, user.password)) {
        console.log('horse here');
        const token = genToken(user);
        res.status(202).json({ id: user.id, username: user.username, token });
      } else {
        console.log('horse there');
        res.status(406).json({ message: 'Invalid Credentials' });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

function genToken(user) {
  console.log(user, 'USER');
  const payload = {
    person: user
  };
  console.log(payload, 'PAYLOAD');
  const options = { expiresIn: '2h' };
  console.log(payload, secrets, options);
  const token = jwt.sign(payload, secrets, options);
  console.log(token, 'TOKEN HERE');
  return token;
}

module.exports = router;
