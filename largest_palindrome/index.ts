export const isPalindrome = (value: string | number): boolean => {
  const normalizedString = String(value).trim().toLowerCase()
  const revertString = normalizedString.split('').reverse().join('')
  return normalizedString === revertString
}

export const findLargestPalindrome = (digits = 2) => {
  let maxNumWithTheseDigits: number = 0
  let maxPalindrome = 0


  for (let i = 0; i < digits; i++) {
    let stringNum = String(maxNumWithTheseDigits)
    stringNum += '9'

    maxNumWithTheseDigits = Number(stringNum)
  }

  for (let i = 0; i < maxNumWithTheseDigits; i++) {
    const numA = i + 1

    for (let i = 0; i < maxNumWithTheseDigits; i++) {
      const numB = i + 1
      
      const result = numA * numB

      const palindrome = isPalindrome(result)
  
      if(palindrome) {
        const isGreaterThanMax = result > maxPalindrome
        if(!isGreaterThanMax) continue

        maxPalindrome = result
      }
    }
  }

  return maxPalindrome
}


console.log(findLargestPalindrome(3))