const jwt = require('jsonwebtoken');
const fs = require('fs');

if (fs.existsSync('config/secrets.js')) {
  var secret = require('../config/secrets.js');
} else {
  var secret = { jwtSecret: process.env.JWT_SECRET };
}
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (token) {
    jwt.verify(token, secret.jwtSecret, (err) => {
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
