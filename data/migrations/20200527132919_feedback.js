
exports.up = async function(knex) {
    await knex.schema.alterTable('users', users => {
            users.specificType('symptoms','jsonb')
            users.specificType('race','jsonb')
            users.specificType('flavor','jsonb')
        }) 
};

exports.down = async function(knex) {
    await knex.schema.alterTable('users', users => {
        users.dropColumn("flavors")
        users.dropColumn("race")
        users.dropColumn("symptoms")
    })
};
