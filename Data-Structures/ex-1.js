'use strinct'

function range (start, end, step = 1) {
  const arr = []
  let startInternal, stopInternal
  if (step > 0) {
    startInternal = start
    stopInternal = end
  } else {
    startInternal = end
    stopInternal = start
  }
  step = Math.abs(step)
  for (let i = startInternal; i <= stopInternal; i += step) {
    arr.push(i)
  }
  return arr
}

function sum (arr) {
  console.log(arr)
  return arr.reduce((acc, elem) => (acc + elem), 0)
}

console.log(sum(range(5, 2, -1)))
