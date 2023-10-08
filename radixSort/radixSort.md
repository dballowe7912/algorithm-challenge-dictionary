### RadixSort


## Pseudocode
- Define a function that accepts a list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop
    - Create buckets for each digit 0-9
    - Place each number in the corresponding bucket based on its *k*th digit
    - Replace our existing array with values in out buckets, starting with 0 and going up to 9
    - return list

# Part 1: getDigit(num, place)
helper function that returns the digit in num at the given place value
```js
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
```

# Part 2: digitCount(num)
helper function that returns the number of digits in num
```js
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
```

# Part 3: mostDigits(nums)
helper function that takes an array of numbers and returns the number of digits in the largest numbers in the list
```js
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}
```

## Big O Notation
