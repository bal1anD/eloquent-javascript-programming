class Rabbit {
  constructor (type) {
    this.type = type
  }

  speak (line) {
    console.log(`The ${this.type} says '${line}'`)
  }
}

const whiteRabbit = new Rabbit('white')
whiteRabbit.speak('I am white')

Rabbit.prototype.teeth = 'small'
console.log(whiteRabbit.teeth)

const killerRabbit = new Rabbit('killer')
killerRabbit.teeth = 'long and sharp'

console.log(killerRabbit.teeth)
