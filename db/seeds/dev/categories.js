
exports.seed = function(knex) {
  return knex('SubjectCategory').insert([
    {name: 'English'},
    {name: 'Science'},
    {name: 'Math'},
    {name: 'Social Studies'},
    {name: 'Arts'},
    {name: 'Athletics'}
  ]);
};
