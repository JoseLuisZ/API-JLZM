const {Router} = require('express')
const { puthEmpleado } = require('../controllers/empleados')
const router = Router()

const { postEmpleado, getEmpleado, putEmpleado, deleteEmpleado } = require('../controllers/empleados')


router.get('/', getEmpleado)
router.post('/', postEmpleado )
router.delete('/', deleteEmpleado)
router.put('/', putEmpleado)
router.patch('/', patchEmpleado)



module.exports = router