# Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted. Inserts element into the correct position on the left.

## Pseudocode

- Start by picking the 2nd element of the array.
- Now compare the 2nd element with the one b4 it and swap if necessary
- Proceed to the next element and if it is not in the correct order, iterate through the sorted portion and insert the element into the correct place
- Repeat until entire array is sorted and return array
