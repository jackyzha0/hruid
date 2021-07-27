const { readFileSync, writeFileSync } = require("fs");
const read = (name) => readFileSync("wordlists/" + name + ".txt", "utf8").split("\n");

// Durstenfeld shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}

const declarations = ['nouns', 'adjectives'].reduce((res, cur) => {
  res[cur] = shuffle(read(cur))
  return res
}, {})

const file = `// This file is generated using gen.js
// wordlists from https://github.com/taikuukaits/SimpleWordlists
module.exports = ${JSON.stringify(declarations)}
`

writeFileSync("words.js", file)