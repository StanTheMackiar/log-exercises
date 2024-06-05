/* If we list all the natural numbers below that are multiples of or, we get and . The sum of these multiples is. Find the sum of all the multiples of or below .*/

export const getMutiplesOfThreeOrFiveSum = (num = 10) => {
  const numArray = Array.from({length: num - 1}, (_, i) => i + 1)

  const multiples = numArray.filter(num => (num % 3 === 0) || (num % 5 === 0))
  const result = multiples.reduce((total, num) => total + num, 0)
  
  return result
}

console.log(getMutiplesOfThreeOrFiveSum(1000))