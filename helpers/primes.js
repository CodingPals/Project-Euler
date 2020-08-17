const primesUntil = (n) => {
  const primes = [2]

  if (n === 2) return primes

  for (let i = 3 ; i <= n ; i++) {
    let prime = true;
    for (let j = 0 ; j < primes[primes.length - 1] ; j++) {
      if (i % primes[j] === 0) {
        prime = false
      }
    }

    if (prime) primes.push(i)
  }

  return primes
}