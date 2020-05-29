const router = require('express').Router();
const Strains = require('./strains-model')
const { isValidId } = require('./strains-service')

router.get('/', async (req, res, next) => {
    try {
      const strains = await Strains.find()
      if(!strains){
        return res.status(404).json({ message: 'Unable to retrieve strains' })
      }
      if(!(Array.isArray(strains) && strains.length)) {
        return res.status(404).json({ message: "No strains in the database"})
      }
      res.json(strains)
    } catch(err) {
      next(err)
    }
  })

  router.delete('/:id', isValidId(), async (req, res, next) => {
      try {
        const { id } = req.params
        await Strains.remove(id)
        res.json({message: 'Successfully deleted strain.'})
      } catch(err) {
          next(err)
      }
  })

  module.exports = router;