exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          fullname: ['Jessica', 'Jones'],
          email: 'jj@super.com',
          school_level: 'high school',
          username: 'killerjess',
          password: 'jojoknuckles'
        },
        {
          fullname: ['barton', 'fink'],
          email: 'barton@fink.com',
          school_level: 'high school',
          username: 'bigbart',
          password: 'daFink25'
        }
      ]);
    });
};
