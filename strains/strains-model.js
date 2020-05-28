const db = require('../data/db-config')
module.exports = { 
    add,
    updateById,
    find,
    findBy,
    findById,
    remove
}

function find() {
    return db('strains').select('id',' name','race','flavors','effects');
}

function remove(id) {
    return db("strains").where('id',id).del()
}

function add() {

}

function updateById() {

}

function findBy() {

}

function findById() {

}