# Binary Heaps
A binary heap is a data structure that is used to store a collection of elements in a way that allows for efficient insertion, deletion, and retrieval of elements. A binary heap is a complete binary tree, which means that all levels of the tree are filled except for the last level, and the elements on the last level are filled from left to right.

Binary heaps are often used as the underlying data structure for priority queues, which are data structures that allow for efficient retrieval of the element with the highest or lowest priority.

Very similar to a Binary Search Tree, but with different rules.
In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes.

---

## Max Binary Heap
- Each parent has at most 2 child nodes
- The value of each parent node is **always** greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

---

## Big O Complexity
- Inserting and deleting - O(log n)
