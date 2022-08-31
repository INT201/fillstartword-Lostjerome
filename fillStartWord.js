const { template } = require("@babel/core");

function fillStartWord(startWord, word) {
  if (word === undefined || word === null) {
    return undefined;
  }
  let result;
  word.includes(startWord) ? (result = word) : (result = startWord + word);

  return result;
}
module.exports = fillStartWord;
