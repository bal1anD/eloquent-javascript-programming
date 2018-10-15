#!/usr/local/bin/node

function normalize () {
  this.coords.forEach(element => {
    console.log(element / this.length)
  })
}

normalize.call({ coords: [0, 2, 3], length: 5 })

function Rabbit (type) {
  this.type = type
}

Rabbit.prototype.speak = function (line) {
  console.log(`Rabbit ${this.type} says '${line}'`)
}

const whiteRabbit = new Rabbit('White')
whiteRabbit.speak('I was created from the Rabbit constructor')
console.log(Object.getPrototypeOf(whiteRabbit) === Function.prototype)
console.log(Rabbit.prototype)
console.log(Function.prototype)
