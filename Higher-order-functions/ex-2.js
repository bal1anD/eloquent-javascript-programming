function loop (value, test, update, body) {
  for (; test(value); value = update(value)) {
    body(value)
  }
}

loop(1, i => i < 10, i => i + 1, i => console.log(i))
