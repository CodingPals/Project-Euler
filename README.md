# Solving Project Euler Challenges 💡

Collaborative repo with [jorgepasco1](https://www.github.com/jorgepasco1). Solving Project Euler Challenges with Javascript, coded live on [twitch](https://www.twitch.tv/franciscopantojag98).

```javascript
const multiplesOf3and5 = (number) => [...Array(number).keys()]
                                     .filter((a)=>a%3==0||a%5==0)
                                     .reduce((a,b)=>a+b,0);
```
## About Project Euler

Project Euler’s Official [Website](https://projecteuler.net/) defines it as: 
> Series of challenging mathematical/computer programming problems that will require more than just mathematical 
insights to solve

## Solved Challenges

1. ### Multiples of 3 and 5
It asks for the sum of all the multiples of both 3 and 5 that do not exceed a given number.

2. ### Even Fibonacci numbers
Considering the Fibonacci sequence, this challenge asks for the **sum** of the even numbers in the sequence, that do not exceed a given number.

3. ### Largest prime factor
A prime number is one that can only be divided by 1 and itself. This problem
is about finding the **largest prime factor** of a given number.

4. ### Largest palindrome product
9009 is a palindrome number because it reads the same both ways. Given a number, the required algorithm must find the **largest palindrome** made from the product of two **n**-digit numbers.

5. ### Smallest multiple
This challenge is about finding the **least common multiple** of all numbers less than or equal to 
a given a number.