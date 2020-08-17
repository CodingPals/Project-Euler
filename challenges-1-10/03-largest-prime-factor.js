// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

const largestPrimeFactor = (num) => {
  const isPrime = num => {
    for (let i = 2 ;  i < num / 2 ; i++) {
      if (num % i === 0 ) return false
    }
  
    return true
  }

  const arr = Array.from({length:Math.ceil(num**0.5)}).map((_,b) => b);
  const factors = arr.filter((a)=> num % a == 0 && a >= 2);
  const primeAndFactor = factors.filter(a => isPrime(a)); 
  return primeAndFactor[primeAndFactor.length - 1] || num;
}

console.log(largestPrimeFactor(8));
