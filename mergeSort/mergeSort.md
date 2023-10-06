### Merge Sort

## Part 1: Merge Arrays

- create a helper function to merge two sorted arrays, which returns a sorted array

### Pseudocode
- create an empty array, look at smallest values in each input array
- while all values haven't been checked:
    - if value in the first array is smaller than the one in the second array, push the value in the first array into our results and move on to the next value in first array
    - if the value in the first array is larger, push the second array value into the results and move on to the next value in the second array
    - once we exhaust all values in one array, push all the values from the remaining array

## Part 2: mergeSort
### Pseudocode

- split the array in halves until you have arrays that are empty or have one element (Array.slice()) recursively
- with smaller sorted arrays, merge those arrays with other sorted arrays until back to full array length
- once merged back together, return merged and sorted array
