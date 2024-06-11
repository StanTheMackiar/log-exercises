export const primeFactors = (num: number = 13195): number[] => {
  const factors: number[] = [];

  // Dividir por 2 hasta que num sea impar
  while (num % 2 === 0) {
    factors.push(2);
    num = num / 2;
  }

  // num debe ser impar en este punto, empezamos desde 3
  for (let i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
      factors.push(i);
      num = num / i;
    }
  }

  // Si num es un número primo mayor que 2
  if (num > 2) {
    factors.push(num);
  }

  return factors;
}


console.log(primeFactors())