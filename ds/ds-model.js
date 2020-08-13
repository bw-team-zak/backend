const db = require('../data/db-config')


function getData() {
  return db("ds_data").select('data','layout');
}

function add(data) {
  return db("ds_data").update(data);
 
}

module.exports = { getData, add };