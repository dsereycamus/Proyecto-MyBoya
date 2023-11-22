const mongoose = require("mongoose");

const { Schema } = mongoose;
// Creación de esquema
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  status: {
    type: String,
    enum: ["active", "inactive", "banned"],
    require: true,
    default: "active",
  },
  color: { type: String, default: '#80BACC' },
  badge: {type: String, default: 'https://res.cloudinary.com/dnyyueowi/image/upload/c_scale,w_300/f_auto/q_auto/myboya/Badge/insignia0.png' },
  score: { type: Number, default: 0 },
});
// Creación del modelo
const User = mongoose.model("User", userSchema);

module.exports = User;
