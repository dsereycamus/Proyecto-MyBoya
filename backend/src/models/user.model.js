const mongoose = require('mongoose')

const { Schema } = mongoose
// Creación de esquema
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  status: {
    type: String,
    enum: ['active', 'inactive'],
    require: true,
    default: 'active'
  },
  points: { default: 0 }
})
// Creación del modelo
const User = mongoose.model('User', userSchema)

module.exports = User