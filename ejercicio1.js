const multiplesOf3and5 = (number) => [...Array(number).keys()]
                                     .filter((a)=>a%3==0||a%5==0)
                                     .reduce((a,b)=>a+b,0);

console.log('Final log', multiplesOf3and5(1000))