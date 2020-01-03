const db = require('../db/dbConfig.js');

module.exports = {
  findSubject,
  addUser,
  find,
  login
};

function find(table) {
  return db(table).select('*');
}

async function findSubject(subject) {
  const careerFits = await db('occupations')
    .returning('name')
    .select('name')
    .where(subject, true);

  return careerFits;
}

async function addUser(user) {
  const [addedUser] = await db('users')
    .returning(['id', 'fullname', 'username'])
    .insert(user);
  return addedUser;
}

function login(filter) {
  return db('users').where(filter);
}
