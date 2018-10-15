#!/usr/local/bin/node

class Vector {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  plus (that) {
    return Object.assign({}, { x: this.x + that.x }, { y: this.y + that.y })
  }

  minus (that) {
    return Object.assign({}, { x: this.x - that.x }, { y: this.y - that.y })
  }
  get length () {
    return Math.sqrt(Math.pow(this.x - 0, 2), Math.pow(this.y - 0, 2))
  }
}

const obj = new Vector(2, 3)

console.log(obj.length)
