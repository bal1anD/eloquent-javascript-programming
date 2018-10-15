const SCRIPTS = require('./scrips/scripts')

function countBy (array, groupName) {
  const groups = []
  for (let element of array) {
    const direction = groupName(element)
    const index = groups.findIndex(grp => grp.direction === direction)
    if (index === -1) {
      groups.push({direction, count: 1})
    } else {
      groups[index].count++
    }
  }
  return groups
}

function findScriptForCode (code) {
  return SCRIPTS.find(script => {
    if (script.ranges.some(([from, to]) => (code >= from && code < to))) {
      return script
    }
  })
}

function scriptsUsedByText (text) {
  const scripts = countBy(text, char => {
    const script = findScriptForCode(char.codePointAt(0))
    console.log('Deep scripts ', script)
    return script ? script.direction : 'none'
  }).filter(({direction}) => direction !== 'none')
  const total = scripts.reduce((max, {direction, count}) => { return max.num > count ? {direc: max.direction || direction, num: max.num } : {direc: direction, num: count } }, {direc: 'unknown', num: 0})
  if (total === 0) return 'No dominant script found'
  return total
}

console.log('Dominant direction ', scriptsUsedByText('انہیں ضمیر اور عقل ودیعت ہوئی ہے۔ اس لئے انہیں ایک دوسرے کے ساتھ , 俄罗斯的狗说"тяв"'))
