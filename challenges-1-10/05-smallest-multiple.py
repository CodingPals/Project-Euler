def smallestMultiple(num):
    arr = list(range(1, num + 1))
    adder = num

    answer = arr[len(arr) - 1] * arr[len(arr) - 2]
    while(not all([answer % el == 0 for el in arr])):
        answer += adder

    return answer

print(smallestMultiple(20))
