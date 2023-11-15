const { createUser } = require('../controllers/user/createUser')
const { updateUserById } = require('../controllers/user/updateUser')
const router = require('express').Router()

// Crear usuario
router.post('/createUser', createUser)

// Actualizar datos del usuario
router.put('/update/:iduser', updateUserById)

module.exports = router