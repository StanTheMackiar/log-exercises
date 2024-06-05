export const findPairsInFibonacciSuccession = (until = 4000000) => {

  const fibonacci: number[] = [1, 2]

   while (fibonacci[fibonacci.length - 1] <= until) {
    const [secondLast, last] = fibonacci.slice(-2)
    const newNum = secondLast + last
    
    fibonacci.push(newNum)
  }

  const onlyPairs = fibonacci.filter(num => num % 2 === 0)
  return onlyPairs
}


console.log(findPairsInFibonacciSuccession())