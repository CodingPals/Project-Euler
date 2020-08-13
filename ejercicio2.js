const fiboEvenSum =(n) =>{
  const num = [1, 2]
  while (num[num.length - 1] <= n) {
    let nextFib = num[num.length-1]+num[num.length-2]
    num.push(nextFib)
  }
  return num.filter(el => el % 2 == 0).reduce((a,b) => a + b)
} 

console.log(fiboEvenSum(1000))