const db = require('../db/dbConfig.js');

module.exports = {
  // add,
  find
  // delete
  // whatever
  // etc.
  
};

async function find(table) {
  return await db(table).select('*');
}