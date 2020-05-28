const express = require('express')
const Rec = require('./recommended-model')
const Users = require('../users/users-model')

const router = express.Router({
    mergeParams:true
})

router.get('/', async (req, res, next) => {
try {
    const { id } = req.params
    const user = await Users.findFeedback(id)
    const rawRec = await axios
        .get('http://strainapi.evanbusse.com/rGnBE2n/strains/search/effect/Insomnia')
        
        res.json(rawRec)
      } catch(err) {
        next(err)
      }
})

router.post('/', async (req, res, next) => {
    try{
     const rec = await Rec.add(req.body)
            res.status(201).json(rec)
    } catch(err) {
        next(err)
    }
})

router.put('/', async (req, res, next) => {
    const { id } = req.params
    try{
        const updatedRec = await Rec.updateById(id)
        res.json(updatedRec)
    } catch (err) {
        next(err)
    }
})

router.delete('/', async (req, res, next) => {
    const { id } = req.params
    try {
        await Rec.remove(id)
        res.json({message: 'Successfully deleted recommendation.'})
    } catch (err) {
        next(err)
    }
})



module.exports = router