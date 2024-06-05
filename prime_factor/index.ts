export const isPrime = (num: number): boolean => {
  if (num <= 1) return false; // Los números menores o iguales a 1 no son primos
  if (num <= 3) return true;  // 2 y 3 son números primos

  // Eliminar números pares y múltiplos de 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Verificar divisores desde 5 hasta la raíz cuadrada del número
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true; // Si no se encontraron divisores, el número es primo
}

export const getPrimeFactors = (num = 13195): number[] => {
  const nums = Array.from({length: num}, (_, i) => i + 1)

  const primes = nums.filter(num => isPrime(num))

  return primes
}

console.log(getPrimeFactors())