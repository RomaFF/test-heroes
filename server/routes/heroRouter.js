const Router = require('express')
const router = new Router()
const superheroController = require('../controllers/superheroController')

router.post('/', superheroController.create)
router.get('/', superheroController.getAll)
router.post('/delete/:id', superheroController.delete)
router.post('/edit/:id', superheroController.edit)
router.get('/:id', superheroController.getOne)

module.exports = router