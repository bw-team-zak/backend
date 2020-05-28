
exports.up = async function(knex) {
    await knex.schema.createTable('strains', strains => {
        strains.increments('index').unique().index()
        strains.integer('id').index()
        strains
          .string('name', 255)
          .notNullable()
          .unique()
          .index()
          
        strains.string('race').notNullable()
        strains.specificType('flavors','text[]')
        strains.specificType('effects','jsonb')
    }) 
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('strains'); 
};
