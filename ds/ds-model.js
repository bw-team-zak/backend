const db = require('../data/db-config')


function getData(user_ID) {
  return db("ds_data").where({user_ID}).select('data');
}

function add(data) {
  return db("ds_data").update(data);
 
}

module.exports = { getData, add };