const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('./users-model')
const recommendedRouter = require('../recommended/recommended-router')
const { isValid, authError } = require('./users-service')

router.use('/:id/recommended',recommendedRouter)

router.post('/register', isValid(), async (req, res, next) => {
  try {
    console.log(req.body)
    const user = await Users.add(req.body)
    res.status(201).json(user)
  } catch(err) {
      next(err)
    }
});

router.post('/login', isValid(), async (req, res, next) => {
  try{
    const { username, password } = req.body
    console.log(req.body)
    const user = await Users.findBy( { username } ).first()
    console.log(user)
    if(!user) {
        return res.status(402).json(authError())
    }
    
    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {
        return res.status(403).json(authError())
    } 

    const tokenPayload = {
        id: user.id,
        username: user.username
    }
    
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET)
    res.json({
        id:user.id,
        username: user.username,
        message: `Welcome ${user.username}!`,
        token: token,
    })
  } catch(err) {
      next(err)
    }
});

router.get('/',async (req, res, next) => {
  try {
    const users = await Users.find()
    res.json(users)
  } catch(err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try{
    const { id } = req.params
    const user = await Users.updateById(req.body,id)
        res.status(201).json(user)
  } catch(err) {
    next(err)
  }
})

module.exports = router;