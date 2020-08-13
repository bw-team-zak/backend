const router = require('express').Router();
Dsmodel = require('./ds-model')

router.get('/viz/:state', async (req, res,next) => {
    try{
        const stateStr = String(req.params.state);
        const stateObj = {state: stateStr}
        await Dsmodel.add(stateObj)
        const data = await Dsmodel.getData()
        res.status(200).json(data)
      } catch(err) {
          next(err)
      }
  });

module.exports = router;