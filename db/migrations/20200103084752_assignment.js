exports.up = function(knex) {
  return knex.schema.createTable('assignments', (tbl) => {
    tbl.increments('id').primary();
    tbl.string('assignment').notNullable();
    tbl.date('date').defaultTo(knex.raw('now()'));
    tbl.text('details');
    tbl
      .integer('student_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('subject_id')
      .notNullable()
      .references('id')
      .inTable('subjectcategory')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('assignments');
};
