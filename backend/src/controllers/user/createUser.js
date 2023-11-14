const bcrypt = require('bcrypt')
const User = require('../../models/user.model')

const createUser = async (req, res) => {

  const {name, email, password} = await req.body

  if(!name || !email || !password){
    return res.status(404).json({
      msg:"Todos los campos son requeridos",
      status:404
    })
  }
  // Falta realizar validación si es que ya está registrado.
  try{
    const salt = bcrypt.genSaltSync()

    await User.create({
      name:name,
      email:email,
      password:bcrypt.hashSync(password,salt)
    })
    res.status(201).json({
      msg:"Usuario creado.",
      status:500
    })
  } catch(err){
    console.log(err)
    res.status(500).json({
      msg:"Error al crear el usuario.",
      status:500
    })
  }

}
module.exports = {createUser}