const express = require('express')
const morgan = require('morgan')
const userRouter = require('../routes/user.routes')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extend: true}))

app.use('/api/v1', userRouter)
app.use('*', (req, res) => res.status(404).send('404'))

module.exports = app