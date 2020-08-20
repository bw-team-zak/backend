const router = require('express').Router();
Dsmodel = require('./ds-model')

router.post('/spending', async (req, res,next) => {
    try{
        const user_ID = req.body.user_ID
        const data = await Dsmodel.getData(user_ID)
        res.status(200).json(data[0].graph_data)
      } catch(err) {
          next(err)
      }
  });

module.exports = router;