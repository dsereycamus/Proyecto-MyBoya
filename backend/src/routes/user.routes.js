const { createUser } = require('../controllers/user/createUser')
const router = require('express').Router()

router.post('/createUser', createUser)

module.exports = router