//1. Dog Age Converter

function dogToHumanYears(dogAge) {
  return dogage * 7
}
let result = dogToHumanYears(11)
console.log (result);


//new function

function calculateTip(total, percentage) {
  return total * percentage
}
let total = calculateTip(100, .34)
console.log (total);


// Even or Odd

function checkEvenOdd(num) {
  if (num%2===0){
    return true
  }
  else{
    return false
  }
}

console.log(checkEvenOdd(8))