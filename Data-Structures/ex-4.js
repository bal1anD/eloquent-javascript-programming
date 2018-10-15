'use strict'

function deepEqual (obj1, obj2) {
  if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
    return obj1 === obj2
  }
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) return false
  const length = keys1.length
  for (let i = 0; i < length; i++) {
    console.log('Deep 1', obj1[keys1[i]])
    if (!deepEqual(obj1[keys1[i]], obj2[keys2[i]])) {
      return false
    }
  }
  return true
}

const obj1 = {
  a: '1',
  b: [1, 3],
  c: {
    prop1: 'p1',
    prop2: 'p2'
  }
}

const obj2 = {
  a: '1',
  b: [1, 3],
  d: {}
}

console.log(deepEqual(obj1, obj2))
