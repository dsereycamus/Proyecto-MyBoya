const User = require('../../models/user.model')

const updateUserById = async (req, res) => {
    const { iduser } = req.params;
    const { name, email } = req.body;
 
   if (!iduser) {
     return res.status(404).json({
       msg: "Id de usuario es requerido",
       status: 404,
     });
   }
 
   if (iduser.length !== 24) {
     return res.status(404).json({
       msg: "Id de usuario no válido",
       status: 404,
     });
   }
 
   const userChanges = {
     name: name,
     email: email
   }
 
   await User.findByIdAndUpdate(iduser, userChanges);
   res.status(200).json({
     msg: "Usuario actualizado correctamente",
     status: 200
   })
 }

 module.exports = { updateUserById };