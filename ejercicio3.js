// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

const isPrime = num => {
  for (let i = 2 ;  i < num / 2 ; i++) {
    if (num % i === 0 ) return false
  }

  return true
}

const largestPrimeFactor = number => {
  let factors = []
  for (let i = 0 ; i < Math.floor(number/2) ; i++) {
    if (number % i === 0) {
      factors.push(i)
    }
  }
  factors.push(number)
  // for (let i = Math.floor(number/2) ; i > 1 ; i--) {
  //   if (isPrime(i) && number % i === 0) return i
  // }
  factors= factors.filter(el => isPrime(el))
  return factors[factors.length - 1]
}

console.log(largestPrimeFactor(600851475143));
