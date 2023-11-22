const Badge = require('../../models/badge.model')

const createBadge = async (req, res) => {
  const { name, url } = await req.body;

  // Validación que estén todos los campos.
  if (!name || !url) {
    return res.status(404).json({
      msg: "Todos los campos son requeridos",
      status: 404,
    });
  }
  // Fin validación

  // Validación si es que ya está registrado.
  const urlBd = await Badge.findOne({url: `${url}`}).exec()
  if(urlBd !== null){
    return res.status(409).json({
      msg: "Ya existe una cuenta con este correo.",
      status: 409,
    });
  }
  // Fin Validación

  try {
    await Badge.create({
      name: name,
      url: url,
    });
    res.status(201).json({
      msg: "Insignia creada.",
      status: 201,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Error al crear una insignia.",
      status: 500,
    });
  }
};

module.exports = {createBadge}