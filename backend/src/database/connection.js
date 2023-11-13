const mongoose = require('mongoose')
require('dotenv').config

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.SECRETSERVER)
    console.log('Conected to database.')
  } catch (err) {
    console.log(err)
    throw new Error('Error on connection to database.')
  }
}

module.exports = { dbConnection }