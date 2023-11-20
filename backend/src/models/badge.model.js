const mongoose = require("mongoose");

const { Schema } = mongoose;
// Creación de esquema
const badgeSchema = new Schema({
  name: {type: String, require: true},
  url: {type: String, require: true}
});
// Creación del modelo
const Badge = mongoose.model("Badge", badgeSchema);

module.exports = Badge;
