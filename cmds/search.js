const cmdCheck = require("../utils/cmdCheck");
const errorHandling = require("../utils/errorHandling");
const printsearchResp = require("../utils/printsearchResp");

module.exports = async (args, searchusingKeyword) => {
  await cmdCheck(searchusingKeyword);

  try {
    const keyword = args.keyword || args._1;
    const books = await searchusingKeyword(keyword);

    if (books.data.totalItems == 0) {
      throw new Error(` Sorry, there's been a problem. It's likely that you have used a keyword that could not be found on the Google Books API. database. Please try again.
        `);
    } else {
      return printsearchResp(keyword, books);
    }
  } catch (error) {
    return errorHandling(error);
  }
};
