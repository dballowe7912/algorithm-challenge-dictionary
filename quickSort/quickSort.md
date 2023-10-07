### Quick Sort
## Pseudocode
# Part One: Pivot
- three arguments
    - array
    - start (default to 0)
    - end   (default to array.length - 1)
- Store the current pivot index in a variable
- Loop through array
    - if pivot is greater than the current element, increment pivot index variable then swap the current element at the pivot index
- Swap the starting element with the pivot index

# QuickSort
- Call the pivot helper on the array
- When the pivot helper returns the new pivot index, recursively call  the pivot helper on the subarray to the left of that index, as well as the right

# Big O Notation
- Time Complexity
    - best case O(*n* log *n*)
    - average case O(*n* log *n*)
    - worst case O(*n*<sup>2</sup>)
- Space Complexity
    - O(log *n*)
