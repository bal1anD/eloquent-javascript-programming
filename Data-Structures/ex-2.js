'use strict'

function reverseArray (arr) {
  const newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

function reverseArrayInPlace (arr) {
  const length = arr.length - 1
  for (let i = 0; i < length / 2; i++) {
    const tmp = arr[i]
    arr[i] = arr[length - i]
    arr[length - i] = tmp
  }
}
const arr = [1, 2, 3]
console.log(reverseArray(arr))
reverseArrayInPlace(arr)
console.log(arr)
