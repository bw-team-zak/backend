const bcrypt = require('bcryptjs')
const userPassword = process.env.USER_PASSWORD || 'password1234'
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
        location: "Boston",
        age: 32,
        experienced: true,
        symptoms:{
          pain: false,
          insomnia: false,
          stress: false,
          lackOfAppetite: false,
          nausea: false,
          fatigue: false,
          muscleSpasm: false,
          eyePressure: false,
          inflammation: false,
          seizure: false,
          other: false,
        },
        race: {
          race1: false,
          race2: false,
          race3: false,
        },
        flavor: {
          earthy: false,
          spicy:false,
          herbal:false,
          citrus: false,
          sweet: false,
          pine: false,
          pungent: false,
          nutty: false,
          minty: false,
        }
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