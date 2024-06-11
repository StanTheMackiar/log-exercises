export const getSmallestMultiple = (numTo: number = 10) => {

  let number = 0
  let minMultiple = 0

  while (!minMultiple) {

    let multiples: number[] = []

    for (let index = 0; index < numTo; index++) {
      const currentNum = index + 1

      const isMultiple = (number % currentNum) === 0
      if(isMultiple) multiples.push(number)
     }

    if(multiples.length === numTo) minMultiple = number

    number++
  }

  return minMultiple
}

console.time('Time')
console.log(getSmallestMultiple(15))
console.timeEnd('Time')