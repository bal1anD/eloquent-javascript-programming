'use strict'

function fizz (num) {
  return num % 3 === 0 && num % 5 !== 0
}

function buzz (num) {
  return num % 5 === 0 && num % 3 !== 0
}

function fizzBuzz (num) {
  return num % 15 === 0
}

for (let num = 1; num <= 100; num++) {
  if (fizzBuzz(num)) {
    console.log('FizzBuzz')
  } else if (buzz(num)) {
    console.log('Buzz')
  } else if (fizz(num)) {
    console.log('Fizz')
  }
}
