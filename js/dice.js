const d3 = () => {
  Math.floor(Math.random() * 4)
}

const d4 = () => {
  Math.floor(Math.random() * 5)
}

const d6 = () => {
  Math.floor(Math.random() * 7)
}

const d8 = () => {
  Math.floor(Math.random() * 9)
}

const d10 = () => {
  Math.floor(Math.random() * 11)
}

const d20 = () => {
  Math.floor(Math.random() * 21)
}

const d100 = () => {
  Math.floor(Math.random() * 101)
}

module.exports = {
  d3,
  d4,
  d6,
  d8,
  d10,
  d20,
  d100,
}