import { createUser } from "./user/createUser";
import { loginUser } from "./user/login";
import { updateUserById } from "./user/updateUser";

// Aquí exportamos todos los controladores:
module.exports = {
  createUser,
  loginUser,
  updateUserById
}