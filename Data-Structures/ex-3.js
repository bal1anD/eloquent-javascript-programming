'use strict'

function createEmptyNode () {
  return {
    value: null,
    rest: null
  }
}

function arrayToList (arr) {
  let head = null
  let ptr = null
  for (let elem of arr) {
    const node = createEmptyNode()
    node.value = elem
    if (!head) {
      head = node
      ptr = head
    } else {
      ptr.rest = node
      ptr = node
    }
  }
  return head
}

function traverseList (head) {
  let ptr = head
  while (ptr !== null) {
    console.log(ptr.value)
    ptr = ptr.rest
  }
}

function listToArray (head) {
  const arr = []
  let ptr = head
  while (ptr != null) {
    arr.push(ptr.value)
    ptr = ptr.rest
  }
  return arr
}

function prepend (head, elem) {
  const node = createEmptyNode()
  node.value = elem
  node.rest = head
  head = node
  return head
}

function nth (head, n) {
  if (!head) return undefined
  if (n === 0) return head.value
  return nth(head.rest, --n)
}
const arr = [1, 2, 3]
const listHead = arrayToList(arr)
traverseList(listHead)
console.log(listToArray(listHead))
const newListHead = prepend(listHead, -1)
traverseList(newListHead)
console.log('Nth ', nth(newListHead, -1))
