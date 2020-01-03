
exports.up = function(knex) {
    return knex.schema
    .createTable('subjectcategory', category => {
        category.increments('id');

        category
            .string('name',20)
            .notNullable()
            .unique()        
        })

    .createTable('occupations', tbl =>{
        tbl.increments('id');

        tbl
            .string('name', 150)
            .notNullable()
            .unique();
        
        tbl
            .boolean('english')
            .defaultTo(false);
        tbl
            .boolean('science')
            .defaultTo(false);
        tbl
            .boolean('math')
            .defaultTo(false);
        tbl
            .boolean('social_studies')
            .defaultTo(false);
        tbl
            .boolean('arts')
            .defaultTo(false);
        tbl
            .boolean('athletics')
            .defaultTo(false);
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('occupations')
        .dropTableIfExists('subjectcategory');
};
