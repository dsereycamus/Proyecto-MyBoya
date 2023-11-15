const delay = async (time) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve();
    }, time * 1000);
  });
};

module.exports = delay;
