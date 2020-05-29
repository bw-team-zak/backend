const jwt = require('jsonwebtoken')
const Users = require('./users-model')
module.exports = {
  authenticate,
  isValidAuth,
  authError,
  isValidInfo,
  isValidId
} 

function authenticate() {
  return async (req, res, next) => {
      try {
          const token = req.headers.authorization
          if (!token) {
              return res.status(401).json(authError())
          }
          
          jwt.verify(token,process.env.JWT_SECRET, (err, decodedPayload) => {
              if (err) {
                  return res.status(401).json(authError())
              }
              req.token = decodedPayload
              next()
          })

      } catch(err) {
          next(err)
      }
  }
}

function isValidAuth()  {
  return async (req, res, next) => {
      const user = req.body
      if(user.username && user.password && typeof user.password === 'string'){
          next()
      }
      else{
          return res.status(400).json({message: 'Please provide a username and an alphanumeric password'})
    }
  }
}

function isValidInfo() {
    return async (req,res,next) => {
        const info = req.body
        if(info.symptoms && info.race && info.flavor){
            next()
        }
        else{
            return res.status(400).json({ message: 'Please provide valid user information' })
      }
    }
}

function isValidId() {
    return async (req, res, next) => {
        const { id } = req.params
        try{
        await Users.findById(id) 
        next()
        } catch {
            return res.status(400).json({ message: 'No user found with that specified Id' })
        }
    }
}

function authError() {
  return  { message: 'Invalid credentials' }
}