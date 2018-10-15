'use strict'

function generateBoard (n) {
  let board = ''

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (col % 2 === row % 2) {
        board += ' '
      } else {
        board += '#'
      }
    }
    board += '\n'
  }
  return board
}

const num = 3
console.log(generateBoard(num))
