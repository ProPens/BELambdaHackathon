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
  return db('Occupations')
    .where('English', true)
}

function findScience(){
  return db('Occupations')
    .where('Science', true)
}

function findMath(){
  return db('Occupations')
    .where('Math', true)
}

function findSocialStudies(){
  return db('Occupations')
    .where('Social_Studies', true)
}

function findArts(){
  return db('Occupations')
    .where('Arts', true)
}

function findAthletics(){
  return db('Occupations')
    .where('Athletics', true)
}