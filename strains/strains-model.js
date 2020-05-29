const db = require('../data/db-config')
module.exports = { 
    find,
    findById,
    remove
}

function find() {
    return db('strains').select('id',' name','race','flavors','effects');
}

function remove(id) {
    return db("strains").where('id',id).del().first()
}

function findById(id) {
    return db("stains").where('id',id).first('id')
}