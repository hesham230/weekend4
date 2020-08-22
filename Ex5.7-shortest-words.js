const shortestWord = (str) => {
  const regex = /\w+/g;
  const wordsArray = str.match(regex);
  const compareWordsLength = (word1, word2) => {
      if (word1.length < word2.length) {
          return word1;
      } else {
          return word2;
      }
  }
  return wordsArray.reduce(compareWordsLength).length;
}

console.log(shortestWord('hesham mousa'));