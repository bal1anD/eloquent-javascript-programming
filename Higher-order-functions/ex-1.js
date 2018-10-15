'use strict'

const arrayOfArray = [[1, 2], ['a', 'b'], [3, 4, 5]]

function flatten (arrayOfArray) {
  return arrayOfArray.reduce((acc, arr) => acc.concat(arr), [])
}

console.log(flatten(arrayOfArray))
