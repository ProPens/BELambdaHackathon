const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const authenticate = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../user/user-router');
const modelRouter = require('../knex-queries/model-router');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const DB = require('knex')(configuration);
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/user', authenticate, userRouter);
server.use('/api/occupations', modelRouter);
// Other Routhers
// ----------------
// -----------------
// -----------------

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});


module.exports = server;
