function loopEvery (array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false
  }
  return true
}

function someEvery (array, predicate) {
  return !array.some(elem => !predicate(elem))
}
const testArray = [1, 1, -1, 6]

console.log(loopEvery(testArray, num => num > 0))
console.log(someEvery(testArray, num => num > 0))
