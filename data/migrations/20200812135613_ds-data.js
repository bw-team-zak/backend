exports.up = async function(knex) {
    await knex.schema.createTable('ds_data', data => {
        data.increments();
    
        data.specificType('data','jsonb');
        data.specificType('layout','jsonb')
        data.string('state')
    }) 
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('ds_data'); 
};
