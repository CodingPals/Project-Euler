// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.
function largestPalindromeProduct(n) {
  function isPalindrome (number) {
    const str = number.toString();
    return str.split('').reverse().join('') === str
  }

  const highestNum = parseInt('9'.repeat(n))
  const lowestNum = parseInt(`1${'0'.repeat(n-1)}`);
  const palindromes = []

  for (let i = highestNum ; i > lowestNum ; i--){
    for (let j = i ; j > lowestNum ; j--) {
      if (isPalindrome(i * j)) palindromes.push(i * j)
    }
  }

  return Math.max(...palindromes)
}

console.log(largestPalindromeProduct(3));