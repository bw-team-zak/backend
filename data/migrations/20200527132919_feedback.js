
exports.up = async function(knex) {
    await knex.schema.alterTable('users', users => {
            users.string('medical', 255)
            users.string('race', 255)
            users.string('positive',255)
            users.string('negative',255)
            users.string('flavors',255)
        }) 
};

exports.down = async function(knex) {
    await knex.schema.alterTable('users', users => {
        users.dropColumn("flavors")
        users.dropColumn("negative")
        users.dropColumn("positive")
        users.dropColumn("race")
        users.dropColumn("medical")
    })
};
