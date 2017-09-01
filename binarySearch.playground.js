const binarySearch = require('./binarySearch')
const min = 0
const max = 600
const randomNumber = Math.floor((Math.random() * max) + min)
const res = binarySearch(min, max, randomNumber)
console.log(res)
