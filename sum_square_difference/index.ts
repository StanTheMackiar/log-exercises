export const getSumSquareDifference = (inputNum = 10): number => {
  const numsArray = Array.from({length: inputNum}, (_, i) => i + 1)

  const squaresNumber = numsArray.map(num => num ** 2)
  const squaresNumSum = squaresNumber.reduce((total, num) => total + num, 0)
  
  const inputNumsSum = numsArray.reduce((total, num) => total + num, 0)
  const inputNumSumSquare = inputNumsSum ** 2

  return inputNumSumSquare - squaresNumSum
}

console.time('Time')
console.log(getSumSquareDifference(100))
console.timeEnd('Time')