const router = require('express').Router();
Dsmodel = require('./ds-model')

router.get('/viz', async (req, res,next) => {
    try{
        // const stateStr = String(req.params.state);
        // const stateObj = {state: stateStr}
        // await dsModel.add(stateObj)
        const data = await dsModel.getData()
        res.status(200).json(data)
      } catch(err) {
          next(err)
      }
  });

module.exports = router;