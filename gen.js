const { readFileSync, writeFileSync } = require("fs");
const read = (name) => readFileSync(name + ".txt", "utf8").split("\n");
const nounDeclarations = JSON.stringify(read('nouns'))
const adjDeclaration = JSON.stringify(read('adjectives'))

const file = `// This file is generated using gen.js
// wordlists from https://github.com/taikuukaits/SimpleWordlists
module.exports = {
 nouns: ${nounDeclarations},
 adjectives: ${adjDeclaration}
}
`

writeFileSync("words.js", file)