const errorHandling = require("./errorHandling");

module.exports = async (cb) => {
  try {
    if (!cb) {
      throw new Error("an incorrect CB function passed to cmd");
    }
    return;
  } catch (error) {
    return errorHandling(error);
  }
};
