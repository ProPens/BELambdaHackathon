const db = require('../db/dbConfig.js');

module.exports = {
  findSubject,
  addUser,
  find,
  login,
  addPoint,
  subtractPoint,
  getStudent,
  addAssignment,
  getAssignment,
  getAllAssign
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

async function addPoint([userId, study]) {
  const subjectValue = await db('users')
    .returning(['id', study, 'username'])
    .where('id', userId)
    .increment(study, 1);
  return subjectValue[0];
}

async function subtractPoint([userId, study]) {
  const subjectValue = await db('users')
    .returning(['id', study, 'username'])
    .where('id', userId)
    .decrement(study, 1);
  return subjectValue[0];
}

async function getStudent(studentId) {
  const student = await db('users')
    .returning('*')
    .where('id', studentId);

  return student;
}

async function addAssignment(assignment) {
  const added = await db('assignments')
    .returning('*')
    .insert(assignment);
  return added[0];
}

async function getAssignment(assignNum) {
  const assignment = await db('assignments')
    .returning('*')
    .where('id', assignNum);
  return assignment[0];
}
async function getAllAssign() {
  const assignments = await db('assignments').returning('*');
  return assignments;
}
