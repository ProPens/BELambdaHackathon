exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('assignments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('assignments').insert([
        {
          id: 1,
          assignment: 'Draw a dinosaur',
          date: '2019-12-19',
          details: 'I liked working with paint',
          student_id: 2,
          subject_id: 5
        }
      ]);
    });
};
