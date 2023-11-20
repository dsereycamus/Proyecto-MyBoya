const jwt = require("jsonwebtoken");

const formatToken = (token) => {
  return token.replace("Bearer ", "");
};

module.exports = {
  readToken: (token) => {
    return jwt.verify(
      token.includes("Bearer") ? formatToken(token) : token,
      "shhhhh"
    );
  },
  makeToken: (payload) => {
    return jwt.sign({ ...payload }, "shhhhh");
  },
};
