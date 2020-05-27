const db = require('../data/db-config')
module.exports = { 
    add,
    find,
    findBy,
    findById,
    updateById,
    remove
}
function find() {
    return db('recommended').select('');
}

function findBy(filter) {
    return db(" r as recommended")
    .join("users as u", "r.user_id", "u.id")
    .where({filter})
    .select('')
}
    
async function add(rec) {
        await db("recommended").insert(rec);

        return findById(rec.user_id); 
}

function findById(id) {
    return db("r as recommended")
    .join("users as u", "r.user_id", "u.id")
    .where("p.id",id)
    .select('')
}

async function updateById(payload,id) {
    await db('recommended').where('user_id',id).update(payload)
    return findById(id)
}

function remove(id) {
    return db("recommended").where('user_id',id).del()
}