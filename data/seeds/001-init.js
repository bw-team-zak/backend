const bcrypt = require('bcryptjs')
const userPassword = process.env.USER_PASSWORD 
exports.seed = function (knex) {
    // 000-cleanup.js alread cleaned out all tables
  
    const users = [
      {
        username: "james",
        password:  bcrypt.hashSync(userPassword, 14),
      },

      {
        username: "rose",
        password:  bcrypt.hashSync(userPassword, 14),
      },

      {
        username: "allen",
        password:  bcrypt.hashSync(userPassword, 14),
        med_condition: "glaucoma",
        age: 32,
        experienced: true
      },

      {
        username: "irving",
        password:  bcrypt.hashSync(userPassword, 14),
      },
      {
        username: "wade",
        password:  bcrypt.hashSync(userPassword, 14),
      },

      {
        username: "anthony",
        password:  bcrypt.hashSync(userPassword, 14),
      },
      
      {
        username: "leonard",
        password:  bcrypt.hashSync(userPassword, 14),
      },
    ];
  
    return knex("users").insert(users);
  };