export const specialPythagoreanTriplet = (sum = 1000) => {
  for (let a = 1; a < sum / 2; a++) {
    for (let b = 1; b < sum / 2; b++) {
      const c = sum - a - b;

      if (a * a + b * b === c * c) {
        console.log(`${a} + ${b} + ${c} = ${sum}`)
        console.log(`Product: ${a * b * c}`)

        return
      }
    }
    
  }
}


specialPythagoreanTriplet()