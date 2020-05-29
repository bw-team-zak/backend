const Strains = require('./strains-model')

module.exports = {
    isValidId
  }

function isValidId() {
    return async (req, res, next) => {
        const { id } = req.params
        try{
            await Strains.findById(id) 
            next()
        } catch {
            return res.status(400).json({ message: 'No strain found with that specified Id' })
        }
    }
}