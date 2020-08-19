exports.up = async function(knex) {
    await knex.schema.createTable('ds_data', data => {
        data.increments();
        data.json('graph_data');
        data.string('user_ID')
    }) 
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('ds_data'); 
};
