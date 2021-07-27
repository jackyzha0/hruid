const { readFileSync, writeFileSync } = require("fs");
const read = (name) => readFileSync(name + ".txt", "utf8").split("\n");

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

const nounDeclarations = JSON.stringify(shuffle(read('nouns')))
const adjDeclaration = JSON.stringify(shuffle(read('adjectives')))

const file = `// This file is generated using gen.js
// wordlists from https://github.com/taikuukaits/SimpleWordlists
module.exports = {
 nouns: ${nounDeclarations},
 adjectives: ${adjDeclaration}
}
`

writeFileSync("words.js", file)