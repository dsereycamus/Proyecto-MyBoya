const User = require("../models/user.model");

const userService = {
  findOneByParam: async (params) => {
    try {
      const result = await User.findOne(params);

      return result;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  },
  updateUserWithParams: async (_id, params) => {
    try {
      const result = await User.updateOne({ _id }, params);

      return result;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  },
  getScores: async () => {
    try {
      const result = await User.find({ score: { $gt: 0 } })
        .sort({ score: -1 })
        .limit(3);

      return result;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  },
};

module.exports = userService;
