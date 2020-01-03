exports.up = function(knex) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments('id').primary();
    tbl
      .specificType('fullname', 'text ARRAY')
      .unique()
      .notNullable();
    tbl
      .string('email')
      .notNullable()
      .unique();
    tbl.string('school_level').notNullable();
    tbl
      .string('username')
      .unique()
      .notNullable();
    tbl.string('password').notNullable();
    tbl.integer('english').defaultTo(0);
    tbl.integer('science').defaultTo(0);
    tbl.integer('math').defaultTo(0);
    tbl.integer('social_studies').defaultTo(0);
    tbl.integer('arts').defaultTo(0);
    tbl.integer('athletics').defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
