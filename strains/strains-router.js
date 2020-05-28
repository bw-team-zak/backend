const router = require('express').Router();
const Strains = require('./strains-model')

router.get('/',async (req, res, next) => {
    try {
      const strains = await Strains.find()
      res.json(strains)
    } catch(err) {
      next(err)
    }
  })

  router.delete('/:id', async (req, res, next) => {
      try {
        const { id } = req.params
        await Strains.remove(id)
        res.json({message: 'Successfully deleted strain.'})
      } catch(err) {
          next(err)
      }
  })

  module.exports = router;