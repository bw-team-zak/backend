
exports.up = async function(knex) {
    await knex.schema.alterTable('users', users => {
            users.string('location', 255)
            users.integer('age')
            users.boolean('experienced')
        }) 
};

exports.down = async function(knex) {
    await knex.schema.alterTable('users', users => {
        users.dropColumn("experienced")
        users.dropColumn("age")
        users.dropColumn("location")
    })
};
