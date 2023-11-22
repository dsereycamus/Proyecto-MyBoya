const router = require('express').Router()
const {createBadge} = require('../controllers/badge/createBadge')

router.post('/createBadge', createBadge)

module.exports = router