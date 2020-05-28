const bdcrypt = require('bcryptjs')
const db = require('../data/db-config')
module.exports = { 
    add,
    updateById,
    find,
    findBy,
    findById,
    findFeedback
}
function find() {
    return db('users').select('id',' username','med_condition','age','experienced','race','medical','positive','negative','flavors').orderBy('id');
}

function findBy(filter) {
    return db("users as u")
    .where(filter)
    .select("u.id", "u.username", "u.password")
    .orderBy("u.id");  
}
    
async function add(user) {
        const rounds = process.env.BCRYPT_ROUNDS || 14
        user.password = await bdcrypt.hash(user.password, rounds)
        const [id] = await db("users").insert(user, "id");

        return findById(id); 
}

async function updateById(data,id) {
   const [ids] = await db('users').where({id}).update(data,"id")
    return findById(ids)
}

function findById(id) {
    return db("users").where({ id }).first('id',' username','location','age','experienced','symptoms','race','flavor');
}

function findFeedback(id) {
    return db('users').where({ id }).first('id','username','medical','race','positive','negative')
}