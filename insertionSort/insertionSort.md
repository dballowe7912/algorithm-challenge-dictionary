# Insertion Sort
Insertion sort is a stable comparison sort algorithm that uses the insertion method. It has two nested loops, which means that as the number of elements in the array grows, it will take approximately n * n longer to perform the sorting.
InsertionSort builds up the sort by gradually creating a larger left half which is always sorted. InsertionSort shifts elements into the correct position on the left.

## Pseudocode

- Start by picking the 2nd element of the array.
- Now compare the 2nd element with the one b4 it and swap it using a temp variable if necessary
- Proceed to the next element and if it is not in the correct order, iterate through the sorted portion and insert the element into the correct place
- Repeat until entire array is sorted and return array

## Big O Notation
The big-O notation for insertion sort is O(n) in the best case, and O(n^2) in the average and worst case.

## Sources
Programming with Mosh
[https://www.youtube.com/watch?v=nKzEJWbkPbQ]
