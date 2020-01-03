const db = require('../db/dbConfig.js');

module.exports = {
  addUser,
  find,
  login

  // delete
  // whatever
  // etc.
};

async function addUser(user) {
  const [addedUser] = await db('users')
    .returning(['id', 'fullname', 'username'])
    .insert(user);
  return addedUser;
}

// function login(filter) {
//   return db('users').where(filter);
// }

function find(table) {
  return db(table).select('*');
}

function login(filter) {
  return db('users').where(filter);
}