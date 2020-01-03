
exports.up = function(knex) {
    return knex.schema
    .createTable('SubjectCategory', category => {
        category.increments('id');

        category
            .string('name',20)
            .notNullable()
            .unique()        
        })

    .createTable('Occupations', tbl =>{
        tbl.increments('id');

        tbl
            .string('name', 150)
            .notNullable()
            .unique();
        
        tbl
            .boolean('English')
            .defaultTo(false);
        tbl
            .boolean('Science')
            .defaultTo(false);
        tbl
            .boolean('Math')
            .defaultTo(false);
        tbl
            .boolean('Social_Studies')
            .defaultTo(false);
        tbl
            .boolean('Arts')
            .defaultTo(false);
        tbl
            .boolean('Athletics')
            .defaultTo(false);
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('Occupations')
        .dropTableIfExists('SubjectCategory');
};
