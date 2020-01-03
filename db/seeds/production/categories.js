
exports.seed = function(knex) {
  return knex('subjectcategory').insert([
    {name: 'snglish'},
    {name: 'science'},
    {name: 'math'},
    {name: 'social studies'},
    {name: 'arts'},
    {name: 'athletics'}
  ]);
};
