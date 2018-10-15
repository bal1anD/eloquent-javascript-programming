const SCRIPTS = require('./scripts')

function filter (array, test) {
  const passed = []
  for (let element of array) {
    if (test(element)) {
      passed.push(element)
    }
  }
  return passed
}

function map (array, transform) {
  const mapped = []
  for (let element of array) {
    mapped.push(transform(element))
  }
  return mapped
}

// function reduce (array, combine, start) {
//   let current = start
//   for (let element of array) {
//     current = combine(current, element)
//   }
//   return current
// }

const livingLanguages = filter(SCRIPTS, script => script.living)
const livingLangNames = map(livingLanguages, lang => lang.name)
console.log(livingLangNames)

function characterCount (script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from)
  }, 0)
}

console.log('Max ', SCRIPTS.reduce((a, b) => {
  return characterCount(a) > characterCount(b) ? a : b
}))

function average (array) {
  return array.reduce((a, b) => a + b, 0) / array.length
}
const avgYearOfOriginOfLivingScripts = Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)))
console.log('Avg. year of origin of living scripts ', avgYearOfOriginOfLivingScripts)

const avgYearOfOriginOfDeadScripts = Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year)))
console.log('Avg. year of origin of dead scripts ', avgYearOfOriginOfDeadScripts)

function characterScript (code) {
  return SCRIPTS.find(script => {
    if (script.ranges.some(([from, to]) => (code >= from && code < to))) {
      return script
    }
  })
}

function countBy (items, groupName) {
  const groups = []
  for (let item of items) {
    const name = groupName(item)
    const known = groups.findIndex(group => groups.name === name)
    if (known === -1) {
      groups.push({name, count: 1})
    } else {
      groups[known].count++
    }
  }
  return groups
}

function textScripts (text) {
  const scripts = countBy(text, char => {
    const script = characterScript(char.codePointAt(0))
    return script ? script.name : 'none'
  }).filter(({name}) => name !== 'none')
  const total = scripts.reduce((acc, {count}) => acc + count, 0)
  if (total === 0) return 'No scripts found'

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`
  }).join(', ')
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'))
console.log(textScripts('blah bale'))
