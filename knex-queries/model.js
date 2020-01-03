const db = require('../db/dbConfig.js');

module.exports = {
  // add,
  find,
  findEnglish,
  findScience,
  findMath,
  findSocialStudies,
  findArts,
  findAthletics
  // delete
  // whatever
  // etc.
};

// async function find(table) {
//   return await db(table).select('*');
// }

function find(){
  return db('Occupations')
}

function findEnglish(){
  return db('Occupations as O')
  .select('O.name')
  .where('English', true)
}

function findScience(){
  return db('Occupations as O')
  .select('O.name')
  .where('Science', true)
}

function findMath(){
  return db('Occupations as O')
    .select('O.name')
    .where('Math', true)
}

function findSocialStudies(){
  return db('Occupations as O')
    .select('O.name')
    .where('Social_Studies', true)
}

function findArts(){
  return db('Occupations as O')
    .select('O.name')
    .where('Arts', true)
}

function findAthletics(){
  return db('Occupations as O')
    .select('O.name')
    .where('Athletics', true)
}