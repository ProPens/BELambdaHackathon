const router = require('express').Router();
const jwt = require('jsonwebtoken');

const environment = process.env.NODE_ENV || 'development';
const DB = require('../knex-queries/model.js');
const bcrypt = require('bcryptjs');
const secrets =
  environment === 'development'
    ? require('../local_config/secrets.js')
    : require('./secrets.js');

module.exports = router;
