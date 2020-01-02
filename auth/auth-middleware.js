const jwt = require('jsonwebtoken');

const environment = process.env.NODE_ENV || 'development';

const secrets =
  environment === 'development'
    ? require('../local_config/secrets.js')
    : require('./secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err) => {
      if (err) {
        res.status(401).json({ you: "aren't registered" });
      } else {
       
        next();
      }
    });
  } else {
    res.status(401).json({ you: 'need a token' });
  }
};
