const {toKey} = require("./index");
const {fromKey} = require("./index");

for (let _i = 0; _i < 1e8; _i++) {
  const i = Math.floor(Math.random() * 1010*2876*9999)
  const genKey = i.toString(16)
  const hruid = fromKey(genKey)
  const backToKey = toKey(hruid)
  if (backToKey !== genKey) {
    console.log(`${backToKey} !== ${genKey}`)
    break
  }
  console.log(hruid)
}