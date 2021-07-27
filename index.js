const {nouns, adjectives} = require('./words')

// A human-readable UID
// <adjective>-<noun>-<0000-9999>
// Address space of 1010*2876*9999 = 29,044,695,240 > 2^32
const fromKey = (key) => {
  let n = parseInt(key, 16)
  if (n > (1010*2876*9999)) {
    throw "Key too large!"
  }
  const adjI = Math.floor(n / (nouns.length * 10000))
  n -= (adjI * (nouns.length * 10000))
  const nounI = Math.floor(n / (10000))
  n -= (nounI * (10000))
  return `${adjectives[adjI]}-${nouns[nounI]}-${("0000" + n).slice(-4)}`
}

const toKey = (hruid) => {
  const [adj, noun, num] = hruid.split("-")
  const adjI = adjectives.indexOf(adj)
  const nounI = nouns.indexOf(noun)
  const numI = parseInt(num, 10)
  return (adjI * (nouns.length * 10000) + nounI * (10000) + numI).toString(16)
}

module.exports = {fromKey, toKey}