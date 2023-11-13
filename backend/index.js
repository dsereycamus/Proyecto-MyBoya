const app = require('./src/app/app')
require('dotenv').config()

const port = process.env.PORT || 8080

const { dbConnection } = require('./src/database/connection')

app.listen(port, () => {
  console.log(`Server is listening...`)
})

dbConnection()